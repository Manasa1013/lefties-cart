import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import "./Login.css";
export const Login = () => {
  const { auth, setAuth, loginHandler } = useAuth();
  const { toast, setToast, hideToastBar } = useToast();
  const [loading, setLoading] = useState(false);
  const [loginField, setLoginField] = useState({
    emailID: "kritinandana@gmail.com",
    password: "KritiN@1"
  });
  const [loginErrorField, setLoginErrorField] = useState({
    emailError: "",
    passwordError: ""
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const emailRegexPattern = new RegExp(
    "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
    "i"
  );
  const passwordRegexPattern = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$",
    "i"
  );
  const url = "http://localhost:8080";

  const [validFieldID, setValidFieldID] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function validateFields(
    regexPattern,
    fieldName,
    errorName,
    errorText,
    errorField,
    setErrorField
  ) {
    let errorFieldName = Object.keys(errorField).find(
      (item) => item === errorName
    );
    if (regexPattern.test(fieldName)) {
      // console.log("pattern matched", errorFieldName);
      setErrorField((prev) => {
        return { ...prev, [errorFieldName]: "" };
      });
    } else {
      // console.log("pattern not matched", errorFieldName);
      setErrorField((prev) => {
        // console.log(errorName, errorText, "printing at line 34");
        return { ...prev, [errorFieldName]: errorText };
      });
    }
  }
  async function loginSubmitHandler() {
    setLoading(true);
    if (
      loginErrorField.emailError.length > 0 ||
      loginErrorField.passwordError.length > 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please enter valid credentials"
      }));
      // setLoading(false);
    } else if (
      loginField.emailID.length <= 0 ||
      loginField.password.length <= 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please enter credentials to log in"
      }));
      // setLoading(false);
      return;
    } else {
      let user = loginField;
      let res = await loginHandler({ user });
      if (res.status === 200) {
        // console.log(res, "at login component");
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Successfully logged in ${res.data.firstName}`
        }));
        localStorage.setItem(
          "token",
          JSON.stringify({ ...res.data.token, user })
        );
        await setAuth((prev) => ({ ...prev, token: res.data.token }));
        // console.log(await auth, "auth after storing token");
        if (!auth.token) return;

        // console.log(location, "at logincomonent");

        // resetLoginValues();
      } else {
        // console.log("error at Login.jsx", await res);
      }
      // setLoading(false);
    }
    return validFieldID;
  }

  function resetLoginValues() {
    setLoginField((prev) => ({
      ...prev,
      emailID: "",
      password: ""
    }));
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
        setLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("login");
    loginSubmitHandler();
  }
  return (
    <div className="wrapper__main">
      <section className="flex-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 id="login--heading" className="heading">
            Log in
          </h1>
          <hr></hr>
          <div id="email--container">
            <label htmlFor="email--input" className="label">
              Email
            </label>
            <input
              id="email--input"
              className="input"
              name="emailID"
              value={loginField.emailID}
              placeholder="jamescameron@mail.com"
              onInput={(e) => {
                // console.log(e.target.value);
                return setLoginField((prev) => {
                  return { ...prev, emailID: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("email in loginForm lost focus");
                let errorAlertMessage = "Email id must be valid address";
                validateFields(
                  emailRegexPattern,
                  loginField.emailID,
                  "emailError",
                  errorAlertMessage,
                  loginErrorField,
                  setLoginErrorField
                );
              }}
            />
            <p className="para text--red">{loginErrorField.emailError}</p>
          </div>
          <div id="password--container">
            <label htmlFor="password--input" className="label">
              Password
            </label>
            <input
              type={showLoginPassword ? "text" : "password"}
              id="password--input"
              className="input"
              name="password"
              value={loginField.password}
              placeholder="W@terWay2"
              onInput={(e) => {
                // console.log(e.target.value);
                setLoginField((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("password field lost focus");
                let errorAlertMessage =
                  "Must have 8 to 18 characters with one capital and one special character";

                validateFields(
                  passwordRegexPattern,
                  loginField.password,
                  "passwordError",
                  errorAlertMessage,
                  loginErrorField,
                  setLoginErrorField
                );
              }}
            ></input>
            <button
              id="is--shown"
              className="secondary"
              onClick={(e) => {
                e.preventDefault();
                setShowLoginPassword((prev) => !prev);
              }}
            >
              <i
                className={showLoginPassword ? "fa fa-eye-slash" : "fa fa-eye"}
              ></i>
            </button>
            <p className="para text--red" style={{ marginTop: "5px" }}>
              {loginErrorField.passwordError}
            </p>
          </div>

          <div>
            {loading ? (
              <button
                type="button"
                className="button login"
                style={{ opacity: "0.6" }}
              >
                Logging in...
              </button>
            ) : (
              <button type="submit" id="login--button" className="button login">
                Log in
              </button>
            )}
          </div>
          <div>
            <a href="/" id="forgot--password" className="link--secondary">
              Forgot password?
            </a>
          </div>
          <hr></hr>
        </form>
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup" className="link--secondary">
            Sign up{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};
