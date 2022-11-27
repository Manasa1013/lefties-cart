import { React } from "react";
// import { products } from "../data/data";
import { useCart } from "../Contexts/CartContext";
import { ProductItem } from "./ProductItem/ProductItem";
export function Products({
  shopCategory,
  setShopCategory,
  handleChangeCategory,
  addToCartClickHandler,
  toast,
  setToast
}) {
  const { state } = useCart();

  return (
    <>
      <div className="grid-container">
        {state.stateProducts
          .filter((prod) => {
            if (prod.category === shopCategory) return prod;
            else if (shopCategory === "Uncategorised") return prod;
          })
          .map((filteredProd) => {
            return (
              <ProductItem
                key={filteredProd.id}
                prod={filteredProd}
                addToCartClickHandler={addToCartClickHandler}
                setToast={setToast}
              />
            );
          })}
      </div>
    </>
  );
}
