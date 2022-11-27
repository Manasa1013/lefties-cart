import { Link } from "react-router-dom";
import "./ProductItem.css";
import "../../styles.css";
import { getTrimmed } from "../utils/commonFunctions";
export const ProductItem = ({ prod, addToCartClickHandler, setToast }) => {
  // const addIcon = "fas fa-cart";
  const wishIcon = "far fa-heart fa-lg";
  const solidWishIcon = "fas fa-heart fa-lg";
  return (
    <div className="card__container">
      <Link className="link" to={`/product/${prod.id}`}>
        <div className="img__container">
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
        <button
          className="pos"
          onClick={() => {
            // console.log("button clicked");
          }}
        >
          <em className={prod.isWishlisted ? solidWishIcon : wishIcon}></em>
        </button>
        <div className="product--desc">
          <h4 className="product--name">{getTrimmed(prod.name, 3)}</h4>
          <p className="product--info">{getTrimmed(prod.description, 4)}..</p>
          <div className="product--price">
            <span className="price">₹{prod.price}</span>
            <span className="strike--price">₹{prod.price + prod.discount}</span>
            <span className="discount">(₹{prod.discount} OFF)</span>
          </div>
        </div>
        <div className="button__container">
          {!prod.isAdded ? (
            <button
              className="button button__primary"
              onClick={() => {
                addToCartClickHandler(prod);
                setToast((prev) => ({
                  ...prev,
                  isVisible: "show",
                  message: "Added to cart",
                }));
              }}
            >
              Add to Cart
            </button>
          ) : (
            <Link to="/cart">
              <button className="button button__primary">
                Go to Cart
                <em className="fa fa-arrow-right"></em>{" "}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
