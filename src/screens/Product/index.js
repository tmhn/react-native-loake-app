import React, { useState } from "react";
import { Dimensions, Image, Text, Pressable, StyleSheet, View } from "react-native";
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import { map } from "ramda";
import { getProductById } from "../../data/utils";
import { CHELSEA, ALDWYCH, MAYFAIR, PARLIAMENT, TRAFALGAR, WESTMINSTER, WHITEHALL } from "../../constants/colors";
import { ChevronLeftOutlineIcon } from "../../components/Icons/ChevronLeftIcon";

import { LastIcon } from "../../components/Icons/LastIcon";
import { FittingIcon } from "../../components/Icons/FittingIcon";
import { SoleIcon } from "../../components/Icons/SoleIcon";
import { StyleIcon } from "../../components/Icons/StyleIcon";
import { CrossIcon } from "../../components/Icons/CrossIcon";

const { width } = Dimensions.get('screen');

const AttributeItem = ({ attributeName, attributeValue, Icon }) => (
  <View style={styles.extraDetailsItem}>
    <View style={styles.extraDetailsItemRow}>
      <Icon height={35} width={35} color={MAYFAIR} />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={styles.extraDetailsTitle}>{attributeName}:</Text>
        <Text style={styles.extraDetailsValue}>{attributeValue}</Text>
      </View>
    </View>
  </View>
)

const ProductScreen = ({ navigation, route }) => {
  const product = getProductById(route.params.id);
  const [selectedSize, setSelectedSize] = useState(null);

  const HeaderBackgroundComponent = (props) => {
    return (
      <Image source={{ uri: product.images[0] }} style={styles.image} />
    );
  }

  const sizeHandler = (size) => {
    setSelectedSize(size);
  }

  return (
    <View style={{ flex: 1, height: 500, margin: 'auto' }}>
      <AppleStyle
        headerHeight={width}
        headerTitleColor={WESTMINSTER}
        headerTitle=""
        headerBackgroundColor={'transparent'}
        title={<Text style={{ fontFamily: "JosefinSans_700Bold", fontSize: 14, textTransform: "uppercase", color: WESTMINSTER }}>{product.name}</Text>}
        titleColor={WESTMINSTER}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        leftIcons={[
          <ChevronLeftOutlineIcon width={25} height={25} color={WESTMINSTER} onPress={() => navigation.goBack()} />
        ]}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          {
            map((image, index) => <Image key={`${index}-${image}`} source={{ uri: image }} style={{ height: width / 4, width: width / 4}} />, product.images)
          }
        </View>
        <View style={styles.productInfoContainer}>
          <View>
            <Text style={styles.title}>{product.name}</Text>
          </View>
          <View>
            <Text style={styles.colour}>Colour: <Text style={styles.colourName}>{product.colour}</Text></Text>
            <Text style={styles.fitting}>{product.fitting} / {product.sole} Sole</Text>
            <Text style={styles.price}>£ {""}<Text style={styles.priceValue}>{product.price}.00</Text></Text>
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.sizeText}>Sizes</Text>
            <View style={styles.sizesContainer}>
              {product.sizes.map(size => (
                <Pressable key={size} style={[ styles.sizeItem, selectedSize === size && styles.activeSizeItem]} onPress={() => sizeHandler(size)}>
                  <Text style={[styles.sizeItemText, selectedSize === size && styles.activeSizeItemText ]}>{size}</Text>
                </Pressable>
              ))}
            </View>
            { selectedSize && (
              <Pressable style={{ marginTop: 20, display: "flex", flexDirection: "row", alignItems: "center"}} onPress={() => sizeHandler(null)}>
                <CrossIcon width={20} height={20} color={WESTMINSTER} /><Text style={{ marginLeft: 10, fontFamily: "JosefinSans_400Regular" }}>Clear</Text>
              </Pressable>
            )}
            <Pressable onPress={() => {}} style={styles.addToBasketButton}>
              <Text style={styles.addToBasketButtonText}>Add to basket</Text>
            </Pressable>
            <Text style={styles.deliveryText}>Order by 1:30PM GMT for <Text style={styles.deliveryTextBold}>same day dispatch</Text></Text>
            <Text style={styles.deliveryText}>FREE UK DELIVERY / FREE UK RETURNS</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          <View style={styles.extraDetailsContainer}>
            <View style={styles.extraDetailsRow}>
              <AttributeItem attributeName={"Fitting"} attributeValue={product.fitting} Icon={FittingIcon} />
              <AttributeItem attributeName={"Last"} attributeValue={product.last} Icon={LastIcon} />
            </View>
            <View style={styles.extraDetailsRow}>
              <AttributeItem attributeName={"Sole"} attributeValue={product.sole} Icon={SoleIcon} />
              <AttributeItem attributeName={"Style"} attributeValue={product.style} Icon={StyleIcon} />
            </View>
          </View>

        </View>
      </AppleStyle>
    </View>
  )
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#F6F6F6"
  },
  image: {
    width,
    height: width
  },
  productInfoContainer: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 60,
    backgroundColor: "white"
  },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 24,
    paddingBottom: 18
  },
  colour: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14
  },
  colourName: {
    color: MAYFAIR
  },
  fitting: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    paddingTop: 10,
    color: ALDWYCH
  },
  price: {
    marginTop: 16,
    fontFamily: "JosefinSans_400Regular",
    color: MAYFAIR,
    fontSize: 20,
  },
  priceValue: {
    fontSize: 30,
    marginLeft: 10
  },
  pickerContainer: {
    marginTop: 30
  },
  sizeText: {
    fontFamily: "JosefinSans_400Regular",
  },
  sizesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  sizeItem: {
    padding: 10,
    marginRight: 6,
    borderWidth: 1,
    borderColor: WESTMINSTER,
    marginTop: 5,
    width: 50
  },
  activeSizeItem: {
    backgroundColor: WESTMINSTER
  },
  sizeItemText: {
    fontFamily: "JosefinSans_300Light"
  },
  activeSizeItemText: {
    color: WHITEHALL,
    fontFamily: "JosefinSans_400Regular"
  },
  addToBasketButton: {
    borderWidth: 1,
    borderColor: WESTMINSTER,
    marginTop: 52,
    marginBottom: 16,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: WESTMINSTER
  },
  addToBasketButtonText: {
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    color: WHITEHALL
  },
  deliveryText: {
    textTransform: "uppercase",
    fontFamily: "JosefinSans_300Light",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  deliveryTextBold: {
    fontFamily: "JosefinSans_500Medium",
    fontSize: 10,
  },
  descriptionContainer: {
    borderTopColor: CHELSEA,
    borderTopWidth: 1,
    paddingTop: 30,
    marginTop: 20
  },
  descriptionText: {
    fontFamily: "JosefinSans_300Light",
    lineHeight: 24
  },
  extraDetailsContainer: {
    borderTopColor: CHELSEA,
    borderTopWidth: 1,
    paddingTop: 30,
    marginTop: 20
  },
  extraDetailsRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30
  },
  extraDetailsItem: {
    width: (width / 2) - 20,
    paddingLeft: 15
  },
  extraDetailsItemRow: {
    display: "flex",
    flexDirection: "row"
  },
  extraDetailsTitle: {
    fontFamily: "PlayfairDisplay_400Regular_Italic",
    color: TRAFALGAR,
    lineHeight: 20,
    fontSize: 12
  },
  extraDetailsValue: {
    fontFamily: "JosefinSans_400Regular",
    color: PARLIAMENT,
    fontSize: 16,
    marginTop: 2,
    flexWrap: "wrap"
  }
});

export default ProductScreen;