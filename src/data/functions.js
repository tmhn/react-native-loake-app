import { countBy, map, mapObjIndexed, trim } from "ramda";
import data from "./products.json";

export const getProductAttributesCount = (attributeName) => {
  let attributes = [];
  const styles = map(product => product[attributeName], data)
  const uniqStyles = countBy(trim)(styles);
  mapObjIndexed((num, key, obj) => attributes.push({ [key]: num }), uniqStyles)
  return attributes;
}