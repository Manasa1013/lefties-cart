import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import "./Signup.css";
import "../Login/Login.css";
import { useToast } from "../../Contexts/ToastContext";
import { APISERVER } from "../utils/commonFunctions";
import { imageSources } from "../../data/data";
export const Signup = () => {
  const { auth, setAuth } = useAuth();
  const { toast, setToast, hideToastBar } = useToast();
  const [fields, setFields] = useState([]);
  const [field, setField] = useState({
    firstName: "Taylor",
    lastName: "Swift",
    emailID: "taylor@gmail.com",
    password: "Taylor@1"
  });

  const [signedIn, setSignedIn] = useState(false);
  const [errorField, setErrorField] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const [showForm, setShowForm] = useState(true);

  const nameRegexPattern = new RegExp(
    "^(?=.{5,14}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );
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
  function handleSubmit(e) {
    e.preventDefault();

    submitHandler();
  }
  function submitHandler() {
    if (
      errorField.firstNameError.length > 0 ||
      errorField.lastNameError.length > 0 ||
      errorField.emailError.length > 0 ||
      errorField.passwordError.length > 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please correct errors at the fields"
      }));
      return;
    } else if (
      field.firstName.length <= 0 ||
      field.lastName.length <= 0 ||
      field.emailID.length <= 0 ||
      field.password.length <= 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please enter details"
      }));
      return;
    } else {
      //create a toast saying you are successfully able to login. (done)
      //if there is any error field ,is with alert message don't allow submitting
      // also add the "field" state into "fields" array (done)

      //saving to backend, after saving then save it to react fields , use
      // it for login data
      const postDetailsToApi = async () => {
        try {
          const response = await axios.post(`${APISERVER}/signup`, field);
          // const response = await axios.post(`${url}/signup`, field);
          if (response.status === 200) {
            setToast((prev) => ({
              ...prev,
              isVisible: "show",
              message: `Successfully signed up ${response.data.firstName}`
            }));
            setAuth((prev) => ({
              ...prev,
              token: response.data.token,
              user: {
                ...prev.user,
                firstName: response.data.firstName,
                lastName: "",
                emailID: "",
                password: ""
              }
            }));
            navigate("");
            // setFields((prev) => [response.data.data[0], ...prev]);
            // setValidFieldID(() => response.data.data[0].id);

            setSignedIn(() => true);

            // console.log(auth);
            resetValues();
            return response.data;
          } else {
            console.log("failure", response);
          }
        } catch (err) {
          setToast((prev) => ({
            ...prev,
            isVisible: "show",
            message: "Error in signing up"
          }));
          console.error(err, "at catch of postDetailsToApi");
        }
      };
      let responseFromPostData = postDetailsToApi();
      // console.log(responseFromPostData);
    }
  }
  function resetValues() {
    setField((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      emailID: "",
      password: ""
    }));
  }
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
  return (
    <div className="wrapper__main">
      <section className="flex-container">
        <form onSubmit={(e) => handleSubmit(e)} method="post">
          <h1 id="login--heading" className="heading">
            Sign up
          </h1>

          <hr></hr>
          <div id="name--container">
            <label htmlFor="first-name" className="label">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              value={field.firstName}
              className="input"
              placeholder="James"
              onInput={(e) => {
                // console.log(e.target.value, "username");
                return setField((prev) => ({
                  ...prev,
                  firstName: e.target.value
                }));
              }}
              onBlur={(e) => {
                // console.log("the username field lost focus");
                let errorAlertMessage =
                  "Must have atleast 5-14 characters and includes only .,_";
                validateFields(
                  nameRegexPattern,
                  field.firstName,
                  "firstNameError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            />
            <p className="para text--red">{errorField.firstNameError}</p>
          </div>
          <div id="name--container">
            <label htmlFor="last-name" className="label">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              value={field.lastName}
              className="input"
              placeholder="Cameron"
              onInput={(e) => {
                // console.log(e.target.value, "username");
                return setField((prev) => ({
                  ...prev,
                  lastName: e.target.value
                }));
              }}
              onBlur={(e) => {
                // console.log("the username field lost focus");
                let errorAlertMessage =
                  "Must have atleast 5-14 characters and includes only .,_";
                validateFields(
                  nameRegexPattern,
                  field.lastName,
                  "lastNameError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            />
            <p className="para text--red">{errorField.lastNameError}</p>
          </div>

          <div id="email--container">
            <label htmlFor="email--input" className="label">
              Email
            </label>
            <input
              id="email--input"
              className="input"
              name="emailID"
              value={field.emailID}
              placeholder="jamescameron@mail.com"
              onInput={(e) => {
                // console.log(e.target.value);
                return setField((prev) => {
                  return { ...prev, emailID: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("email lost focus");
                let errorAlertMessage = "Email id must be valid address";
                validateFields(
                  emailRegexPattern,
                  field.emailID,
                  "emailError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            />
            <p className="para text--red">{errorField.emailError}</p>
          </div>
          <div id="password--container">
            <label htmlFor="password--input" className="label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password--input"
              className="input"
              name="password"
              value={field.password}
              placeholder="theWay^OfWater2"
              onInput={(e) => {
                // console.log(e.target.value);
                setField((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("password field lost focus");
                let errorAlertMessage =
                  "Must have 8 to 18 characters with one capital and one special character";

                validateFields(
                  passwordRegexPattern,
                  field.password,
                  "passwordError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            ></input>
            <button
              id="is--shown"
              className="secondary"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
            >
              <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
            </button>
            <p className="para text--red" style={{ marginTop: "5px" }}>
              {errorField.passwordError}
            </p>
          </div>

          <div>
            <button
              type="submit"
              id="login--button"
              className="button login"
              onClick={() => {
                console.log("clicked sign up");
              }}
            >
              Sign up
            </button>
          </div>

          <hr></hr>
        </form>
        <div>
          <p>Have an account already?</p>
          <Link to="/login" className="link--secondary">
            Log in{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};
