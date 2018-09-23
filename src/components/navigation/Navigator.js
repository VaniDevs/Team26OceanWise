import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';

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
import { home } from '../../../assets/images';
import { colors, fontFamily } from '../../styles';

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

const getTabBarLabel = routeName => {
  if (routeName === 'HomeTab') {
    return 'HOME';
  }
  if (routeName === 'PlacesTab') {
    return 'PLACES';
  }
  return 'IMPACT';
};

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab,
    PlacesTab,
    ImpactTab
  },
  {
    tabBarPosition: 'bottom',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeTab') {
          iconName = `home${focused ? '' : ''}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Image source={home} size={23} color={colors.secondary} />;
      },
      tabBarLabel: getTabBarLabel(navigation.state.routeName)
    }),
    tabBarOptions: {
      activeTintColor: colors.secondary,
      inactiveTintColor: colors.label,
      allowFontScaling: false,
      style: {
        borderTopColor: 'transparent',
        backgroundColor: colors.bg
      },
      labelStyle: {
        fontFamily: fontFamily.plexMonoBold
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
