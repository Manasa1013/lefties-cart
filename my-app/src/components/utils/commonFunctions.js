export const getTrimmed = (text, num) => {
  let textArr = text.split(" ");
  if (textArr.length > num) {
    textArr = textArr.slice(0, num + 1);
    textArr = textArr.join(" ");
  } else {
    textArr.join(" ");
  }
  return textArr;
};

// export const APISERVER = `https://leftkart-backend.herokuapp.com`;
export const APISERVER = `https://ecommerce-backend.manasa1998.repl.co`;
