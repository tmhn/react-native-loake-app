import React from "react";
import { Dimensions, Image, Text, StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import ProductList from "../../components/ProductList";
import { WHITEHALL } from "../../constants/colors";

import data from "../../data/products.json";

const CollectionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar />
      <ProductList data={data} navigation={navigation} />
    </SafeAreaView>
  )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: WHITEHALL
  }
});

export default CollectionScreen;