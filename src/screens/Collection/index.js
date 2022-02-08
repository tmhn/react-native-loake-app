import React from "react";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import ProductList from "../../components/ProductList";
import { WHITEHALL } from "../../constants/colors";

const CollectionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar />
      <ProductList navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: WHITEHALL
  }
});

export default CollectionScreen;