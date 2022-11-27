import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/CartContext";
import { ToastProvider } from "./Contexts/ToastContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// ApiService.init();
root.render(
  <StrictMode>
    <ToastProvider>
      <Router>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </Router>
    </ToastProvider>
  </StrictMode>
);
