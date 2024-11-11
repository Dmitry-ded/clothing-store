import { CartProducts } from "../redux/slices/cartSlice"

export const calcTotalPrice = (products: CartProducts[]) => {
  return products.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
}