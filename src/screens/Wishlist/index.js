import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MAYFAIR, WESTMINSTER, WHITEHALL } from "../../constants/colors";

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState([]);

  if (wishlist.length === 0) {
    return (
      <SafeAreaView style={styles.emptyWrapper}>
        <Text style={styles.emptyWrapperText}>Your wishlist is currently empty.</Text>
        <Pressable style={styles.returnToShopButton} onPress={() => {}}>
          <Text style={styles.returnToShop}>Return to shop</Text>
        </Pressable>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Wishlist screen...</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  emptyWrapper: {
    flex: 1,
    backgroundColor: WHITEHALL,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  emptyWrapperText: {
    fontFamily: "JosefinSans_300Light",
    marginBottom: 30
  },
  returnToShopButton: {
    borderWidth: 1,
    borderColor: MAYFAIR,
    padding: 20
  },
  returnToShop: {
    fontFamily: "JosefinSans_400Regular",
    color: WESTMINSTER,
    textTransform: "uppercase"
  },
  wrapper: {
    flex: 1,
    backgroundColor: WHITEHALL,
  }
})

export default WishlistScreen;