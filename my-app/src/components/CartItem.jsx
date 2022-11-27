import { Link } from "react-router-dom";
import "../styles.css";
import "../components/ProductItem/ProductItem.css";
import { getTrimmed } from "./utils/commonFunctions";
export const CartItem = ({
  prod,
  incClickHandler,
  decClickHandler,
  removeClickHandler,
}) => {
  // const addIcon = "fas fa-cart";
  // const wishIcon = "far fa-heart fa-lg";
  // const solidWishIcon = "fas fa-heart fa-lg";
  const plusIcon = "far fa-plus-square fa-lg";
  const minusIcon = "far fa-minus-square fa-lg";

  return (
    <div className="cart-card__container">
      <div className="cart-card__item">
        <Link className="link" to={`/product/${prod.id}`}>
          <div className="cart-card__img">
            <img
              className="w-full"
              width="100%"
              height="auto"
              src={prod.src[0]}
              alt={prod.name}
            />
          </div>
        </Link>

        <div className="card-contents">
          <div className="product--desc">
            <h4 className="product--name">{getTrimmed(prod.name, 3)}</h4>
            <p className="product--info">{getTrimmed(prod.description, 4)}..</p>
            <div className="product--price">
              <span className="price">₹{prod.price}</span>
              <span className="strike--price">
                ₹{prod.price + prod.discount}
              </span>
              <span className="discount">(₹{prod.discount} OFF)</span>
            </div>
          </div>

          <div className="flex--container">
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => incClickHandler()}
            >
              <em className={plusIcon}></em>
            </button>
            <small className="align-left">
              {prod.count > 0 && `${prod.count}`}
            </small>
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => decClickHandler()}
            >
              <em className={minusIcon}></em>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-row-container">
        <button
          type="button"
          className="button button__secondary remove"
          onClick={() => removeClickHandler()}
        >
          Remove
        </button>
        <button
          type="button"
          className="button button__secondary move-wishlist"
          onClick={() => removeClickHandler()}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};
