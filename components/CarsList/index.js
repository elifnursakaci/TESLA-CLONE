import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import styles from './style';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = props => {
  console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item}></CarItem>}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}></FlatList>
    </View>
  );
};

export default CarsList;
