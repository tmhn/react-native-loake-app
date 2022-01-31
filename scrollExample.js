import React, { useState, useRef } from 'react';
import { Image, Text, Dimensions, StyleSheet, TouchableHighlight, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import productData from "./data.json"

// const data = [
//   {
//     id: '001',
//     number: 1,
//     color: 'tomato'
//   },
//   {
//     id: '002',
//     number: 2,
//     color: 'thistle'
//   },
//   {
//     id: '003',
//     number: 3,
//     color: 'skyblue'
//   },
//   {
//     id: '004',
//     number: 4,
//     color: 'teal'
//   }
// ];

const data = productData[0]

const App = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const listRef = useRef(null);

  const handler = (number) => {
    console.log(`number: ${number}`)
    console.log(`currentStep: ${currentStep}`)
    console.log(`listRef`)
    console.log(listRef.current)

    let next = number;
    setCurrentStep(number)
    listRef.current.scrollToIndex({index: next, animated: true})
  }

  console.log(`currentStep: ${currentStep}`)

  return (
    <View>
      <View style={styles.container}>
        <SwiperFlatList
          ref={listRef}
          index={currentStep}
        >
          {
            data.images.map((datem) => {
              console.log(datem)
              console.log(typeof datem)
              return (
                <Image source={{ uri: datem }} style={styles.child}/>
              )
            })
          }
        </SwiperFlatList>
      </View>
      <View style={styles.subContainer}>
        {data.images.map((datem, index) => (
          <TouchableHighlight
            key={datem.id}
            style={{ opacity: index === currentStep ? 0.6 : 1 }}
            onPress={() => handler(index)}
          >
            <Image
              style={[
                index === 0 && styles.firstSubItem,
                index === 1 || index === 2 && styles.middleSubItems,
                index === 3 && styles.endSubItem,
                styles.subContainerItem
              ]}
              source={{ uri: datem }}
            />
          </TouchableHighlight>
        ))}
      </View>
      <Text>{currentStep}</Text>
    </View>
  )
};

const { width } = Dimensions.get('window');
const subItemWidth = width / 4 - 2

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height: width
  },
  subContainer: {
    display: 'flex',
    flexDirection: "row",
    marginTop: 4
  },
  subContainerItem: {
    width: subItemWidth,
    height: subItemWidth
  },
  firstSubItem: {
    marginLeft: 0,
    marginRight: 2
  },
  middleSubItems: {
    marginLeft: 2,
    marginRight: 2
  },
  endSubItem: {
    marginLeft: 2,
    marginRight: 0
  },
  child: { width, height: width },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default App;