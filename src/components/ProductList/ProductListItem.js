import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MAYFAIR, WESTMINSTER } from "../../constants/colors";

const { width } = Dimensions.get('window');
const cellDimensions = (width / 2) - 20;

const ProductListItem = (props) => {
  const { product, navigation, isProductSpotlight } = props;
  return (
    <Pressable key={product.id} onPress={() => navigation.navigate("ProductScreen", { id: product.id })} style={isProductSpotlight ? styles.productSpotlight : styles.product}>
      <Image source={{ uri: product.images[0] }} style={isProductSpotlight ? styles.productSpotlightImage : styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.productNamePriceContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>£{product.price}</Text>
        </View>
        <View style={styles.productColourFit}>
          <Text style={styles.productColour}>{product.colour.productColour}</Text>
          <Text style={styles.productColour}>{product.fitting} / {product.sole} Sole</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  product: {
    width: cellDimensions,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30
  },
  productSpotlight: {
    width: width - 20,
    marginBottom: 30
  },
  productImage: {
    width: cellDimensions,
    height: cellDimensions
  },
  productSpotlightImage: {
    width: width - 20,
    height: width - 20
  },
  productInfo: {
    marginTop: 15
  },
  productNamePriceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  },
  productName: {
    fontFamily: "PlayfairDisplay_400Regular",
    color: WESTMINSTER
  },
  productPrice: {
    color: MAYFAIR,
    fontFamily: "JosefinSans_400Regular",
    marginRight: 8
  },
  productColourFit: {
    display: "flex",
    flexDirection: "column"
  },
  productColour: {
    fontFamily: "JosefinSans_300Light",
    color: WESTMINSTER,
    fontSize: 10,
    lineHeight: 18
  },
});

export default ProductListItem;