import { find, propEq } from "ramda";
import productData from "./products.json";

export const getProductById = (id) => {
  return find(propEq('id', id))(productData);
}