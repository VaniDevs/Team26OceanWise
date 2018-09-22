import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Navigation from './components/navigation';
import { STORE_USER_ENVIRO_POINTS } from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.getData(STORE_USER_ENVIRO_POINTS).then(value => {
      // Initialize store if it doesn't exist
      if (!value) {
        this.storeData(STORE_USER_ENVIRO_POINTS, '0');
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
