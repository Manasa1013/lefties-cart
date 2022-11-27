import { useEffect } from "react";
import { useCart } from "../Contexts/CartContext";
import { useAuth } from "../Contexts/AuthContext";
import { useToast } from "../Contexts/ToastContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ shopCategory, handleChangeCategory }) => {
  const { state } = useCart();
  const { auth, setAuth, logoutHandler } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  const { setToast } = useToast();
  useEffect(() => {
    if (shopCategory === "Uncategorised") return;
    else navigate("/products");
  }, [shopCategory, navigate]);
  const categories = new Set();
  state.stateProducts.forEach((prod) => categories.add(prod.category));

  return (
    <>
      <nav className="navbar-component">
        <div className="hamburger-menu">
          <a className="link inline" href="/">
            <span className="line "></span>
            <span className="line "></span>
            <span className="line "></span>
          </a>
          <header className="inline">
            <Link to="/" className="logo link">
              Lefties cart
            </Link>
          </header>
        </div>
        <ul className="categories__list">
          <li>
            <Link to="/" className="link responsive">
              Home
            </Link>
          </li>
          <li>
            <select
              id="category"
              className="select"
              value={shopCategory}
              onChange={(e) => {
                handleChangeCategory(e);
              }}
            >
              <option defaultValue value="Uncategorised">
                Shop
              </option>
              {Array.from(categories).map((prod) => {
                return (
                  <option key={prod} value={prod}>
                    {prod}
                  </option>
                );
              })}
            </select>
          </li>
          <li>
            <Link to="/blogs" className="link responsive">
              Blogs
            </Link>
          </li>
        </ul>
        <ul className="categories__list">
          <li>
            {!auth.token ? (
              <Link to="/login" className="link">
                Login/Signup
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  logoutHandler();
                  setAuth((prev) => ({ ...prev, token: "" }));
                  navigate("/");
                  setToast((prev) => ({
                    ...prev,
                    isVisible: "show",
                    message: "Logged out successfully",
                  }));
                }}
                className="link"
                style={{
                  outline: "transparent",
                  background: "var(--white)",
                  border: "transparent",
                  fontSize: "1rem",
                }}
              >
                {/* {
                  console.table( " kritinandana@gmail.com ", " KritiN@1 ");
                } */}
                <em className="fa-solid fa-user">Logout</em>
              </button>
            )}
          </li>
          <li>
            <Link to="/cart" className="link responsive">
              <em className="fa-solid fa-cart-shopping"></em>
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="link responsive">
              <em className="fa-solid fa-heart"></em>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
