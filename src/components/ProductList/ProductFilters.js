import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { keys, head, map, values } from "ramda";

import { getProductAttributesCount, filterCategories, transformAttributesList, prettifyCategoryName } from "../../data/functions";
import { ANGEL, HOLLAND_PARK, MAYFAIR, WESTMINSTER, WHITEHALL } from "../../constants/colors";
import { CircleIcon } from "../Icons/CircleIcon";
import { CrossIcon } from "../Icons/CrossIcon";
import { AdjustmentsIcon } from "../Icons/AdjustmentsIcon";

const { width } = Dimensions.get('window');
const cellDimensions = (width / 2) - 20;

const ProductFilters = ({ handleFilterChanges }) => {
  const [activeFilters, setActiveFilters] = useState(filterCategories)
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => ['50%', '75%'], []);
  const bottomSheetModalRef = useRef(null);
  const handleSheetChanges = useCallback((index) => console.log('handleSheetChanges', index), []);

  useEffect(() => {
    handleFilterChanges(activeFilters);
  }, [activeFilters]);

  const filterItemHandler = (categoryNameValue, attributeValue) => {
    console.log(categoryNameValue)
    console.log(attributeValue)
    const updatedCategoryFilters = activeFilters.map(filterItem => {
      if (filterItem.value === categoryNameValue) {
        // No current filter is set for the current filterItem, or toggling to different attribute
        // So set it to be the attributeValue
        if (!filterItem["activeFilter"] || filterItem["activeFilter"] !== attributeValue) {
          filterItem["activeFilter"] = attributeValue;
          return filterItem;
        }

        // Values are the same, so handle toggling attribute "off"
        if (filterItem["activeFilter"] === attributeValue) {
          filterItem["activeFilter"] = "";
          return filterItem;
        }
      }

      return filterItem
    });
    setActiveFilters(updatedCategoryFilters);
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
            const activeItem = activeFilters.find(elem => elem.activeFilter === filterItemName);

            return (
            <Pressable
              key={`${index}-${filterItemName}`}
              onPress={() => filterItemHandler(filterCategoryName, filterItemName)}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20, width: cellDimensions }}
            >
              <CircleIcon width={14} height={14} color={activeItem ? WESTMINSTER : ANGEL} fill={activeItem ? WESTMINSTER : WHITEHALL} />
              <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 14, color: activeItem ? WESTMINSTER : ANGEL, marginLeft: 15 }}>
                {filterItemName}
              </Text>
              <Text style={{ fontFamily: "JosefinSans_400Regular", color: MAYFAIR, fontSize: 12, marginLeft: 8 }}>{filterItemCount}</Text>
            </Pressable>
          )}, data)
        }
      </View>
    )
  }

  return (
    <View>
      <Pressable onPress={handlePresentModalPress} style={styles.filtersButton}>
        <AdjustmentsIcon width={25} height={25} color={WESTMINSTER} />
        <Text style={styles.filtersButtonText}>Filters</Text>
      </Pressable>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          transformAttributesList(activeFilters) && map(item => {
            const categoryName = head(keys(item));
            const prettifiedCategoryName = prettifyCategoryName(categoryName);
            const prettifiedAttributeName = head(values(item));
            return (
            <Pressable onPress={() => filterItemHandler(categoryName, prettifiedAttributeName)} style={{ borderWidth: 1, borderRadius: 4, borderColor: WESTMINSTER, marginRight: 10, padding: 10, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
              <View style={{ display: "flex", flxDirection: "column", marginRight: 10 }}>
                <Text style={{ fontFamily: "JosefinSans_400Regular", textTransform: "capitalize" }}>{prettifiedCategoryName}:</Text>
                <Text style={{ fontFamily: "JosefinSans_300Light" }}>{""}{prettifiedAttributeName}</Text>
              </View>
              <CrossIcon width={14} height={14} color={ANGEL} />
            </Pressable>
          )}, transformAttributesList(activeFilters))
        }
      </View>
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
    </View>
  );
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
  filtersButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: HOLLAND_PARK,
    padding: 10
  },
  filtersButtonText: {
    fontFamily: "JosefinSans_500Medium",
    marginLeft: 15
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