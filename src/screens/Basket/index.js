import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const BasketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Basket screen...</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})

export default BasketScreen;