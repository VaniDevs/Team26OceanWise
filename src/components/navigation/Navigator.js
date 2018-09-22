import { createStackNavigator } from 'react-navigation';

import Home from '../Home';
import { HOME_SCREEN } from '../../constants';

const Navigator = createStackNavigator({
  [HOME_SCREEN]: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default Navigator;
