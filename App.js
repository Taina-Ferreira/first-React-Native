import React  from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Routes from './src/routes'

const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Routes/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  }
});

export default App;