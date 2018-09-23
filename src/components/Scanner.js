import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styled from 'styled-components';

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
  onSuccess = code => {
    const { navigation } = this.props;
    console.log('Scanned: ', code);
    navigation.navigate({
      routeName: STAMPS_SCREEN,
      params: { logo: code.data }
    });
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ScanScreen;
