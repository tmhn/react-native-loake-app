import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { keys, head, map, values } from "ramda";

import { getProductAttributesCount } from "../../data/functions";
import { ANGEL, HOLLAND_PARK, MAYFAIR, WESTMINSTER, WHITEHALL } from "../../constants/colors";
import { CircleIcon } from "../Icons/CircleIcon";

const { width } = Dimensions.get('window');
const cellDimensions = (width / 2) - 20;
const filterCategories = [{ label: "style", value: "style", activeFilter: "" }, { label: "colour", value: "colourFamily", activeFilter: "" }, { label: "fitting", value: "fitting", activeFilter: "" }, { label: "sole", value: "sole", activeFilter: "" }, { label: "last", value: "last", activeFilter: "" }];


const ProductFilters = (props) => {
  const [activeFilters, setActiveFilters] = useState(filterCategories)
  const snapPoints = useMemo(() => ['50%', '75%'], []);

  useEffect(() => {
    console.log("filters have changed")
  }, [activeFilters])

  const { bottomSheetModalRef, handleSheetChanges, data } = props;

  console.log(activeFilters)

  const logSelector = (categoryNameValue, attributeValue) => {

    const newFiltersArray = activeFilters.map(filterItem => {
      if (filterItem.value === categoryNameValue) {

        console.log("----------------")
        console.log(filterItem)
        console.log(`filterVal: ${filterItem["activeFilter"]}`)
        console.log(`filterValBoolean: ${!!filterItem["activeFilter"]}`)
        console.log(`attributeValue: ${attributeValue}`)

        // No current filter is set for the current filterItem, or toggling to different attribute
        // So set it to be the attributeValue
        if (!filterItem["activeFilter"] || filterItem["activeFilter"] !== attributeValue) {
          console.log(`is false...`)
          filterItem["activeFilter"] = attributeValue;
          return filterItem;
        }

        // handle toggling attribute "off"
        if (filterItem["activeFilter"] === attributeValue) {
          console.log(`is equal...`)
          filterItem["activeFilter"] = "";
          return filterItem;
        }
      }

      return filterItem
    });
    setActiveFilters(newFiltersArray);
  }

  const FilterCategory = ({ filterCategory }) => {
    const data = getProductAttributesCount(filterCategory.value);
    const filterCategoryTitle = filterCategory.label;
    return (
      <View style={styles.filterItem}>
        <Text style={styles.filterTitle}>{filterCategoryTitle}</Text>
        <FilterItem filterCategoryName={filterCategory.value} data={data} />
      </View>
    )
  }

  const FilterItem = ({ filterCategoryName, data }) => {
    return (
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          map((item, index) => {
            const filterItemName = head(keys(item));
            const filterItemCount = head(values(item))

            let activeItem = false;

            if (!!activeFilters.find(elem => elem.activeFilter === filterItemName)) {
              activeItem = true;
            }

            return (
            <Pressable
              key={filterItemName}
              onPress={() => logSelector(filterCategoryName, filterItemName)}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}
            >
              <CircleIcon width={14} height={14} color={activeItem ? WESTMINSTER : ANGEL} fill={activeItem ? WESTMINSTER : WHITEHALL} />
              <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: activeItem ? WESTMINSTER : ANGEL, marginLeft: 15 }}>{filterItemName}</Text>
              <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>{filterItemCount}</Text>
            </Pressable>
          )}, data)
        }
      </View>
    )
  }

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
          {
            activeFilters.map((filterCategory, index) => (
              <FilterCategory key={`${index}-${filterCategory.label}`} filterCategory={filterCategory} />
            ))
          }
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