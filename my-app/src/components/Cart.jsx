import { useCart } from "../Contexts/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { state, dispatch } = useCart();
  function incClickHandler(item) {
    dispatch({ type: "INC_IN_CART", payload: item });
  }
  function decClickHandler(item) {
    item.count > 1
      ? dispatch({ type: "DEC_IN_CART", payload: item })
      : dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }
  function removeClickHandler(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }
  const cartLength = state.cart
    .map((item) => item.count)
    .reduce((acc, curr) => (acc = acc + curr), 0);
  let netPrice = state.cart
    .map((item) => item.count * item.price)
    .reduce((acc, curr) => acc + curr, 0);
  const LinkToPages = () => (
    <div className="cart-button__container ">
      <Link to="/products">
        <button
          style={{
            width: "9.5rem"
          }}
          className="button button__secondary hover"
        >
          <span> Visit Products</span>
        </button>
      </Link>
      <Link to="/wishlist">
        <button className="button button__secondary hover">
          <span>Add from Wishlist</span>
        </button>
      </Link>
    </div>
  );
  return (
    <div className="cart-wrapper">
      <div className="summary-container">
        <div className="summary-card">
          <div>
            <span className="total-tag">Total : </span>
            <h2 className="total-price">
              <span>₹ {`${netPrice}`}</span>
            </h2>
          </div>
          <button className="button__primary cart-btn--primary">
            Proceed to buy
          </button>
        </div>
      </div>
      <div className="cart-grid">
        {cartLength === 0 && <LinkToPages />}
        {state.cart.map((prod) => {
          return (
            <CartItem
              key={prod.id}
              prod={prod}
              incClickHandler={() => incClickHandler(prod)}
              decClickHandler={() => decClickHandler(prod)}
              removeClickHandler={() => removeClickHandler(prod)}
            />
          );
        })}
      </div>
      <hr style={{ color: "var(--hr-green)", border: "none" }}></hr>
    </div>
  );
};
