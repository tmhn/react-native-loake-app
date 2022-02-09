import React from "react";
import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ROYAL, WHITEHALL } from "../../constants/colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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