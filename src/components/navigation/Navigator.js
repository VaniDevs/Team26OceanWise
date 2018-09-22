import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../Home';
import Places from '../Places';
import Redeem from '../Redeem';
import Impact from '../Impact';
import { HOME_SCREEN, PLACES_SCREEN, REDEEM_SCREEN, IMPACT_SCREEN, TAB_SCREEN } from '../../constants';

const HomeTab = createStackNavigator({
  [HOME_SCREEN]: {
    screen: Home,
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

const RedeemTab = createStackNavigator({
  [REDEEM_SCREEN]: {
    screen: Redeem,
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
    RedeemTab,
    ImpactTab
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#000',
      allowFontScaling: false,
      style: {
        backgroundColor: '#fff'
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
