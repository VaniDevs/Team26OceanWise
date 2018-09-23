import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { STAMPS_SCREEN } from '../constants';

class ScanScreen extends Component {
  onSuccess = code => {
    const { navigation } = this.props;
    console.log('Scanned: ', code);
    navigation.navigate({
      routeName: STAMPS_SCREEN,
      params: { logo: code.data }
    });
  };

  renderTopContent = () => (
    <View>
      <Text>Scanning...</Text>
      <Text>Scan the coffee shops QR code to verify</Text>
    </View>
  );

  render() {
    return <QRCodeScanner onRead={this.onSuccess} topContent={this.renderTopContent} />;
  }
}
ScanScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ScanScreen;
