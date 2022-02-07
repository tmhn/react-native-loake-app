import React, { useCallback, useRef } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import ProductListItem from "./ProductListItem";
import ProductFilters from "./ProductFilters";

import { HOLLAND_PARK, WESTMINSTER } from "../../constants/colors";
import { AdjustmentsIcon } from "../Icons/AdjustmentsIcon";

// Product spotlight indexes
const spotlightIndexes = [6, 11];

const ProductList = ({ data, navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <View style={styles.container}>
          <Pressable onPress={handlePresentModalPress} style={styles.filtersButton}>
            <AdjustmentsIcon width={25} height={25} color={WESTMINSTER} />
            <Text style={styles.filtersButtonText}>Filters</Text>
          </Pressable>
          <ProductFilters
            data={data}
            bottomSheetModalRef={bottomSheetModalRef}
            handleSheetChanges={handleSheetChanges}
          />
        </View>
        <View style={styles.productListWrapper}>
          {
            data.map((product, index) => (
              <ProductListItem
                key={index}
                product={product}
                navigation={navigation}
                isProductSpotlight={spotlightIndexes.includes(index)}
              />
            ))
          }
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
  },
  filtersButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: HOLLAND_PARK,
    padding: 10
  },
  filtersButtonText: {
    fontFamily: "JosefinSans_500Medium",
    marginLeft: 15
  }
});

export default ProductList;