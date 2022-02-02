import { countBy, map } from "ramda";

export const getProductAttributeCounts = (data, attr) => {
  return countBy((item ) => item)(map(product => product[attr], data))
}

// getProductAttributeCounts(data, "last")