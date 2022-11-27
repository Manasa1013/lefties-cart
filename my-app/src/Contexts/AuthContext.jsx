import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthReducer } from "../reducers/AuthReducer";
import { useToast } from "./ToastContext";
import { APISERVER } from "../components/utils/commonFunctions";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: "",
    user: {}
  });
  const { toast, setToast } = useToast();
  const url = `http://localhost:8080`;

  const navigate = useNavigate();
  const location = useLocation();
  async function logoutHandler() {
    try {
      localStorage.removeItem("token");
    } catch (err) {
      console.error(err, "while logging out error");
    }
  }
  async function loginHandler({ user }) {
    try {
      // const response = await axios.post(`${url}/login`, user);
      const response = await axios.post(`${APISERVER}/login`, user);
      if (response.status === 200) {
        // console.log(response);
        setAuth((prev) => ({ ...prev, token: response.data.token }));
        navigate(location?.state ? location?.state?.from?.pathname : "/", {
          replace: true
        });
        return response;
      }
      if (response.status !== 200) {
        console.error(response);
      }
    } catch (err) {
      console.error(err, "error while logging in");
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Error in logging in"
      }));
      return err;
    }
  }
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}
