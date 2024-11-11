import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLocalStorage = () => {
  const data  = localStorage.getItem("cart");
  const products = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(products);
  
  return {
    products,
    totalPrice,
  }
}