import React, { Component } from 'react';

import Navigation from './components/navigation';
import { STORE_USER_CUPS_SAVED, STORE_FAV_CAFES, STORE_USER_ENVIRO_POINTS } from './constants';
import { getData, storeData } from './storageUtils';

class App extends Component {
  constructor(props) {
    super(props);

    getData(STORE_FAV_CAFES)
      .then(value => {
        // Initialize store if it doesn't exist
        if (!value) {
          const emptyArray = [];
          storeData(STORE_USER_ENVIRO_POINTS, '0');
          storeData(STORE_USER_CUPS_SAVED, '0');
          storeData(STORE_FAV_CAFES, JSON.stringify(emptyArray));
        }
      })
      .catch(() => console.log('Error initializing storage'));
  }

  render() {
    return <Navigation />;
  }
}

export default App;
