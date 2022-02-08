import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import ProductListItem from "./ProductListItem";
import ProductFilters from "./ProductFilters";

import data from "../../data/products.json";
import { useProductFilter } from "../../data/functions";
const productSpotlightIndexes = [6, 11];

const ProductList = ({ navigation }) => {
  const [productData, setProductData] = useState(data);

  const handleFilterChanges = (filters) => {
    const updatedProducts = useProductFilter(filters);
    setProductData(updatedProducts);
  }

  const renderProductListItem = () => {
    if (productData.length === 0) {
      return (
        <View style={{ marginTop: 50, display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ textAlign: "center", fontFamily: "JosefinSans_300Light" }}>No products...</Text>
        </View>
      )
    }

    return (
      productData.map((product, index) => (
        <ProductListItem
          key={index}
          product={product}
          navigation={navigation}
          isProductSpotlight={productSpotlightIndexes.includes(index)}
        />
      ))
    )
  }

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <View style={styles.container}>
          <ProductFilters handleFilterChanges={handleFilterChanges} />
        </View>
        <View style={styles.productListWrapper}>
          {renderProductListItem()}
        </View>
      </ScrollView>
    </BottomSheetModalProvider>
  )
};

const styles = StyleSheet.create({
  productListWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  }
});

export default ProductList;