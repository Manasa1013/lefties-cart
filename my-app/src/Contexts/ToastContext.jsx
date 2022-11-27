import { useContext, createContext, useState } from "react";

export const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    isVisible: "hide",
    message: ""
  });
  const hideToastBar = () => {
    setToast((prev) => ({ ...prev, isVisible: "hide", message: "" }));
  };

  return (
    <ToastContext.Provider value={{ toast, setToast, hideToastBar }}>
      {children}
    </ToastContext.Provider>
  );
};
