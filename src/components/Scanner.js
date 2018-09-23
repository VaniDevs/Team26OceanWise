import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styled from 'styled-components';

import AppProvider, { AppContext } from '../AppProvider';
import { STAMPS_SCREEN } from '../constants';
import { colors, fontFamily } from '../styles';
import { logo29thParallel } from '../../assets/images';

const HeaderSection = styled.View`
  padding-vertical: 10px;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

const ScanText = styled.Text`
  font-family: ${fontFamily.plexMonoBold};
  color: #fff;
  font-size: 15px;
  line-height: 19px;
  align-self: center;
`;

class ScanScreen extends Component {
  onSuccess = (code, context) => {
    const { navigation } = this.props;
    const { enviroPoints, cupsSaved, togoQuantity, lidQuantity } = navigation.state.params;
    const prevAquiredPoints = context.favoriteCafes.length > 0 ? context.favoriteCafes[0].points : 0;

    context.addEnviroPoints(enviroPoints);
    context.addCupsSaved(cupsSaved);

    const coffeeAmount = Number(cupsSaved || togoQuantity || lidQuantity) + prevAquiredPoints;

    // TODO use code.logo instead of hardcoded logo
    // and grab coffee house name from the URL
    context.addPointsToCafe("49th Parallel Café &amp; Lucky's Doughnuts - MAIN", logo29thParallel, coffeeAmount);

    navigation.navigate({
      routeName: STAMPS_SCREEN,
      params: {
        logo: logo29thParallel,
        coffeeAmount,
        coffeeHouse: "49th Parallel Café &amp; Lucky's Doughnuts - MAIN"
      }
    });
  };

  render() {
    const { screenProps } = this.props;
    const { context } = screenProps;
    return (
      <QRCodeScanner
        onRead={code => this.onSuccess(code, context)}
        topContent={
          <HeaderSection>
            <ScanText>SCAN CAFE QR CODE</ScanText>
          </HeaderSection>
        }
        topViewStyle={{ backgroundColor: colors.primary }}
        bottomViewStyle={{ backgroundColor: colors.primary }}
      />
    );
  }
}

ScanScreen.propTypes = {
  screenProps: PropTypes.shape({
    context: PropTypes.shape({}).isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        cupsSaved: PropTypes.number,
        lidQuantity: PropTypes.string,
        togoQuantity: PropTypes.string
      })
    }),
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ScanScreen;
