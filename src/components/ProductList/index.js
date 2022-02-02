/*
  To do:
  - Split out to Product component
  - Look at rendering larger products at 7, 12 indexes...
*/

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MAYFAIR, WESTMINSTER } from "../../constants/colors";

const spotlightIndexes = [6, 11];
const ProductList = ({ data, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.productListWrapper}>
        {
          data.map((product, index) => {
            console.log(product)
            return (
              <Pressable key={product.id} onPress={() => navigation.navigate("ProductScreen", { id: product.id })} style={spotlightIndexes.includes(index) ? styles.productSpotlight : styles.product}>
                <Image source={{ uri: product.images[0] }} style={spotlightIndexes.includes(index) ? styles.productSpotlightImage : styles.productImage} />
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
            )
          })
        }
      </View>
    </ScrollView>
  )
};

const { width } = Dimensions.get('window');
const cellDimensions = (width / 2) - 20

const styles = StyleSheet.create({
  productListWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10
  },
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
  }
});

export default ProductList;