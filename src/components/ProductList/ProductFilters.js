import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { CircleIcon } from "../Icons/CircleIcon";
import { ANGEL, HOLLAND_PARK, MAYFAIR, WESTMINSTER } from "../../constants/colors";

const { width } = Dimensions.get('window');
const cellDimensions = (width / 2) - 20

const filterCategories = ["style", "colour", "fitting", "sole", "last", "filter by price"];

const ProductFilters = (props) => {
  const { bottomSheetModalRef, snapPoints, handleSheetChanges, data } = props;

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.wrapper}
    >
      <View style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Filters</Text>
        </View>
        <ScrollView style={styles.scrollWrapper}>

          <View style={styles.filterItem}>
            <Text style={styles.filterTitle}>Style</Text>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={ANGEL} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: ANGEL, marginLeft: 15 }}>Toe Cap</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>5</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={WESTMINSTER} fill={WESTMINSTER} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: WESTMINSTER, marginLeft: 15 }}>Brogue</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>10</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={ANGEL} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: ANGEL, marginLeft: 15 }}>Semi Brogue</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>2</Text>
              </View>

            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterTitle}>Colour</Text>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={ANGEL} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: ANGEL, marginLeft: 15 }}>Black</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>5</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={ANGEL} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: ANGEL, marginLeft: 15 }}>Greens</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>2</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}>
                <CircleIcon width={14} height={14} color={WESTMINSTER} fill={WESTMINSTER} />
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: WESTMINSTER, marginLeft: 15 }}>Browns</Text>
                <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>10</Text>
              </View>

            </View></View>
          <View style={styles.filterItem}><Text style={styles.filterTitle}>Fitting</Text></View>
          <View style={styles.filterItem}><Text style={styles.filterTitle}>Sole</Text></View>
          <View style={styles.filterItem}><Text style={styles.filterTitle}>Last</Text></View>
          <View style={styles.filterItem}><Text style={styles.filterTitle}>Filter by Price</Text></View>
        </ScrollView>
      </View>
    </BottomSheetModal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 6
  },
  contentContainer: {
    flex: 1,
    color: "blue"
  },
  scrollWrapper: {
    padding: 20
  },
  headingContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: HOLLAND_PARK
  },
  headingTitle: {
    fontFamily: "JosefinSans_500Medium",
    textTransform: "uppercase",
    marginTop: 10,
    paddingBottom: 20
  },
  filterTitle: {
    fontFamily: "JosefinSans_600SemiBold",
    textTransform: "uppercase",
    color: WESTMINSTER,
    fontSize: 12,
    marginBottom: 24
  },
  filterItem: {
    marginBottom: 40
  }
})

export default ProductFilters;