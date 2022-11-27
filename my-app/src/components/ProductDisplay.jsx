import { useParams, Link } from "react-router-dom";
import { products } from "../data/data";
import { useCart } from "../Contexts/CartContext";
import { ProductItem } from "./ProductItem/ProductItem";

export function ProductDisplay({ addToCartClickHandler, setToast }) {
  const { state } = useCart();
  const totalProducts = Object.values(state.stateProducts).flat();
  let { productId } = useParams();
  let product = totalProducts.find((prod) => productId === prod.id);
  // console.log(productId, product.id === productId);

  return (
    <section key={productId}>
      <ProductItem
        prod={product}
        addToCartClickHandler={() => addToCartClickHandler(product)}
        setToast={setToast}
      />
    </section>
  );
}
