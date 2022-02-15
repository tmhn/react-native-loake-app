import React from "react";
import { Dimensions, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CHELSEA, ROYAL, WHITEHALL } from "../../constants/colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <ImageBackground source={{ uri: "https://www.loake.com/wp-content/uploads/2021/11/homebox-boots-hiker-min.jpg" }} resizeMode="cover" style={{ height: 500, width: "100%", justifyContent: "center" }}>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular_Italic", color: "white", textAlign: "center", fontSize: 22 }}>Country Influences</Text>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular", color: "white", marginTop: 30, textAlign: "center", fontSize: 40 }}>Autumn / Winter</Text>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular", color: "white", textAlign: "center", fontSize: 40 }}>Boot Collection</Text>
          </ImageBackground>
        </View>
        <View id="carousel">
          <ImageBackground source={{ uri: "https://11e9802pkzi11wwxyd1byxlm-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/homebox_boots_nirchn-min.jpg?id=122966" }} resizeMode="cover" style={{ height: 350, width: "100%", justifyContent: "center" }}>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular_Italic", color: "white", fontSize: 22, paddingLeft: 16 }}>Year round excellence</Text>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular", color: "white", marginTop: 30, fontSize: 40, paddingLeft: 16 }}>Boots</Text>
            <View style={{ borderWidth: 1, borderColor: "white", backgroundColor: "#fff3", marginLeft: 16, width: 200 }}>
              <Text style={{ paddingVertical: 20, paddingHorizontal: 10, color: "white", fontFamily: "JosefinSans_600SemiBold"  }}>Shop our boot collection</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ marginVertical: 30, borderBottomWidth: 1, borderBottomColor: CHELSEA }} />
        <View style={styles.topbox}>
          <View style={styles.topboxHeaderContainer}>
            <Text style={styles.topboxTitle}>New Year, New Shoes</Text>
            <Text style={styles.topboxSubheading}>Sale Now On</Text>
          </View>
          <View style={styles.topboxDescriptorContainer}>
            <Text style={styles.topboxDescriptor}>It’s almost time to step into the new season, and as such, we’ve added our Final Reductions to our Sale! Discover a selection of our best-selling Shoes, Boots & Accessories, crafted from the finest calf, suede, and grain leathers, now with up to 30% off!</Text>
          </View>
          <View>
            <View style={styles.topboxStylesFilterRow}>
              <Pressable onPress={() => {}} style={styles.topboxStylesFilter}><Text style={styles.topboxStylesFilterText}>Winter Boots</Text></Pressable>
              <Pressable onPress={() => {}} style={styles.topboxStylesFilter}><Text style={styles.topboxStylesFilterText}>Formal Classics</Text></Pressable>
            </View>
            <View style={styles.topboxStylesFilterRow}>
              <Pressable onPress={() => {}} style={styles.topboxStylesFilter}><Text style={styles.topboxStylesFilterText}>Trainers</Text></Pressable>
              <Pressable onPress={() => {}} style={styles.topboxStylesFilter}><Text style={styles.topboxStylesFilterText}>Seasonal Classics</Text></Pressable>
            </View>
            <Pressable onPress={() => {}} style={[styles.topboxStylesFilter, styles.topboxStylesFilterFullWidth]}><Text style={styles.topboxStylesFilterText}>Final Reductions</Text></Pressable>
          </View>
        </View>
        <View style={styles.seasonalCarousel}>
          <Text>Autumn Winter 2021</Text>
          <Text>Loake Season Styles</Text>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const { width } = Dimensions.get("window");
const halfWidth = width / 2 - 36;
const fullWidth = width - 64;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITEHALL,
    flex: 1,
    paddingHorizontal: 10
  },
  topbox: {
    display: "flex",
    backgroundColor: "#fbf4e9",
    paddingHorizontal: 18,
    paddingBottom: 60,
    paddingTop: 80
  },
  topboxHeaderContainer: {
    marginBottom: 24
  },
  topboxTitle: {
    fontFamily: "PlayfairDisplay_400Regular_Italic",
    color: ROYAL,
    fontSize: 16
  },
  topboxSubheading: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 30,
    color: ROYAL,
    textTransform: "uppercase"
  },
  topboxDescriptorContainer: {
    marginBottom: 24
  },
  topboxDescriptor: {
    fontFamily: "JosefinSans_300Light",
    color: ROYAL,
    lineHeight: 24
  },
  topboxStylesFilter: {
    marginBottom: 36
  },
  topboxStylesFilterRow: {
    display: "flex",
    flexDirection: "row"
  },
  topboxStylesFilter: {
    borderWidth: 1,
    borderColor: ROYAL,
    margin: 4,
    width: halfWidth
  },
  topboxStylesFilterFullWidth: {
    width: fullWidth
  },
  topboxStylesFilterText: {
    fontFamily: "JosefinSans_400Regular",
    color: ROYAL,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center"
  },
  seasonalCarousel: {
    backgroundColor: WHITEHALL
  }
})

export default HomeScreen;