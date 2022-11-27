import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { products } from "../data/data";

export const useCart = () => {
  return useContext(CartContext);
};
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    stateProducts: products
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
