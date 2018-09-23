import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess = code => {
    console.log('Scanned: ', code);
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

export default ScanScreen;
