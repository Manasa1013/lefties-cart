export function CartReducer(state, action) {
  // console.log("action", action);
  // console.log("state obj :", state, "cart arr:", state.cart);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          {
            ...action.payload,
            isAdded: !action.payload.isAdded,
            count: 1
          },
          ...state.cart
        ]
      };
    case "INC_IN_CART":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            // console.log("from incHandler,item's count:", item.count);
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      };
    case "DEC_IN_CART":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (item.count > 1) {
              // console.log("from DecreaseHandler,item's count:", item.count);
              return { ...item, count: item.count - 1 };
            }
          }
          return item;
        })
      };
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        stateProducts: state.stateProducts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isAdded: false };
          }
          return item;
        })
      };
    }
    case "EDIT_PROD_CART":
      // TODO : after added routing point to that item in cart
      return {
        ...state,
        stateProducts: state.stateProducts.map((item) => {
          if (item.id === action.payload.id) {
            // console.log(action.payload);
            return { ...item, isAdded: !item.isAdded };
          }
          return item;
        })
      };
    default:
    // console.log("error");
  }
  // console.log(`state after adding ${state}`);
  return state;
}
