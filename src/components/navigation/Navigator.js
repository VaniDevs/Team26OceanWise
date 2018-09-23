import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../Home';
import Places from '../Places';
import Impact from '../Impact';
import Activity from '../Activity';
import Scanner from '../Scanner';
import Stamps from '../Stamps';
import StampsFull from '../StampsFull';
import Redeem from '../Redeem';
import {
  HOME_SCREEN,
  PLACES_SCREEN,
  IMPACT_SCREEN,
  TAB_SCREEN,
  ACTIVITY_SCREEN,
  SCANNER_SCREEN,
  STAMPS_SCREEN,
  STAMPS_FULL_SCREEN,
  REDEEM_SCREEN
} from '../../constants';
import { colors } from '../../styles';

const HomeTab = createStackNavigator({
  [HOME_SCREEN]: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },
  [ACTIVITY_SCREEN]: {
    screen: Activity,
    navigationOptions: () => ({
      header: null
    })
  },
  [SCANNER_SCREEN]: {
    screen: Scanner,
    navigationOptions: () => ({
      header: null
    })
  },
  [STAMPS_FULL_SCREEN]: {
    screen: StampsFull,
    navigationOptions: () => ({
      header: null
    })
  },
  [REDEEM_SCREEN]: {
    screen: Redeem,
    navigationOptions: () => ({
      header: null
    })
  }
});

const PlacesTab = createStackNavigator({
  [PLACES_SCREEN]: {
    screen: Places,
    navigationOptions: () => ({
      header: null
    })
  }
});

const ImpactTab = createStackNavigator({
  [IMPACT_SCREEN]: {
    screen: Impact,
    navigationOptions: () => ({
      header: null
    })
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab,
    PlacesTab,
    ImpactTab
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#000',
      allowFontScaling: false,
      style: {
        backgroundColor: colors.bg
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  [TAB_SCREEN]: {
    screen: AppTabNavigator,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default AppNavigator;
