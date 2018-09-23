import React from 'react';

import AppNavigator from './Navigator';
import AppProvider, { AppContext } from '../../AppProvider';

function Navigation() {
  return (
    <AppProvider>
      <AppContext.Consumer>{context => <AppNavigator screenProps={{ context }} />}</AppContext.Consumer>
    </AppProvider>
  );
}

export default Navigation;
