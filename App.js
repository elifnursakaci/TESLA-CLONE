import {View, StyleSheet} from 'react-native';
import React from 'react';

import {StatusBar} from 'expo-status-bar';
import CarsList from './components/CarsList';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList></CarsList>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
