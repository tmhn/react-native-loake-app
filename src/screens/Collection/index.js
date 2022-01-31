import React from "react";
import { Dimensions, Image, Text, StatusBar, SafeAreaView, StyleSheet, View } from "react-native";

const CollectionScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar />
      <View>
        <Image source={{ uri: "https://11e9802pkzi11wwxyd1byxlm-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/LARCH-SIDE-min-1-900x1035.jpg" }} style={styles.image} />
        <View style={styles.productInfoContainer}>
          <Text style={styles.title}>Larch shoe</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1
  },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 17
  },
  image: {
    width,
    height: width
  },
  productInfoContainer: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default CollectionScreen;