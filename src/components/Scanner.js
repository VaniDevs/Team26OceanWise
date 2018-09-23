import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styled from 'styled-components';

import AppProvider, { AppContext } from '../AppProvider';
import { STAMPS_SCREEN } from '../constants';
import { colors, fontFamily } from '../styles';

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
    const { enviroPoints, cupsSaved, togoQuantity } = navigation.state.params;

    // CHECK IF COFFEE HOUSE EXISTS
    console.log('inga');
    console.log('code: ', code);
    console.log('context: ', context);

    context.addEnviroPoints(enviroPoints);
    context.addCupsSaved(cupsSaved);

    //context.addCafe((points: togoQuantity));

    navigation.navigate({
      routeName: STAMPS_SCREEN,
      params: {
        logo: code.data,
        enviroPoints,
        cupsSaved
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
