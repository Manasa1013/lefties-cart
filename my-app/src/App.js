import { useEffect, useState } from "react";
import { Route, Routes, useActionData } from "react-router";
import { Outlet, useNavigate } from "react-router-dom";

import { useCart } from "./Contexts/CartContext";
import { useAuth } from "./Contexts/AuthContext";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { imageSources } from "./data/data";
import { Products } from "./components/Products";

import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { ProductDisplay } from "./components/ProductDisplay";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./components/Toast/Toast";

import { RequireAuth } from "./components/RequireAuth";
export default function App() {
  const { toast, setToast, hideToastBar } = useToast();
  const [slideIndex, setSlideIndex] = useState(0);
  const [shopCategory, setShopCategory] = useState("Uncategorised");
  const { dispatch } = useCart();
  const { auth, setAuth } = useAuth();
  function increaseSlideIndex() {
    setSlideIndex((indexValue) => {
      if (indexValue === imageSources.length - 1) {
        indexValue = 0;
      } else indexValue++;
      return indexValue;
    });
  }
  function handleChangeCategory(e) {
    // console.log(shopCategory);
    setShopCategory(e.target.value);
    return shopCategory;
  }
  function addToCartHandler(newItem) {
    if (newItem.isAdded === true) {
      return;
    } else {
      dispatch({ type: "ADD_TO_CART", payload: newItem });
      dispatch({ type: "EDIT_PROD_CART", payload: newItem });
    }
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="App">
      <Navbar
        shopCategory={shopCategory}
        handleChangeCategory={(e) => handleChangeCategory(e)}
      />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              increaseSlideIndex={() => increaseSlideIndex()}
            />
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/products"
          element={
            <Products
              shopCategory={shopCategory}
              setShopCategory={setShopCategory}
              handleChangeCategory={handleChangeCategory}
              addToCartClickHandler={addToCartHandler}
              toast={toast}
              setToast={setToast}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <ProductDisplay
              addToCartClickHandler={addToCartHandler}
              setToast={setToast}
            />
          }
        ></Route>

        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Toast />
    </div>
  );
}
