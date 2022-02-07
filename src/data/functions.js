import { all, countBy, equals, filter, head, keys, map, mapObjIndexed, T, trim, values } from "ramda";
import data from "./products.json";

export const getProductAttributesCount = (attributeName) => {
  let attributes = [];
  const styles = map(product => product[attributeName], data)
  const uniqStyles = countBy(trim)(styles);
  mapObjIndexed((num, key, obj) => attributes.push({ [key]: num }), uniqStyles)
  return attributes;
};

export const filterProductsByAttributes = (attributesList) => {
  const res = filter(product => {

    const filterBooleanValues = map(filterItem => {
      const filterItemKey = head(keys(filterItem));
      const filterItemValue = head(values(filterItem));
      return equals(product[filterItemKey], filterItemValue)
    }, attributesList)

    return all(equals(T()))(filterBooleanValues)
  }, data);

  return res;
};


export const transformAttributesList = (attributesList) => {
  const list = map(attribute => ({ [attribute.value]: attribute.activeFilter }), attributesList)
  const res = filter(item => head(values(item)), list)
  return res;
}
