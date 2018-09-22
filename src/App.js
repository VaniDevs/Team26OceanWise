import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Navigation from './components/navigation';
import { STORE_USER_CUPS_SAVED, STORE_FAV_CAFES, STORE_USER_ENVIRO_POINTS } from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.getData(STORE_FAV_CAFES).then(value => {
      // Initialize store if it doesn't exist
      if (!value) {
        const emptyArray = [];
        this.storeData(STORE_USER_ENVIRO_POINTS, '0');
        this.storeData(STORE_USER_CUPS_SAVED, '0');
        this.storeData(STORE_FAV_CAFES, JSON.stringify(emptyArray));
      }
    });
  }

  getData = async itemKey => {
    try {
      return await AsyncStorage.getItem(itemKey);
    } catch (error) {
      console.log('Error retrieving data: ', error);
      return null;
    }
  };

  storeData = async (itemKey, value) => {
    try {
      await AsyncStorage.setItem(itemKey, value);
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };

  render() {
    return <Navigation />;
  }
}

export default App;
