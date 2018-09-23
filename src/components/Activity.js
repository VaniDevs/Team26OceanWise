import React, { Component } from 'react';
import { Alert, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Permissions from 'react-native-permissions';

import { ACTIVITY_SCREEN, SCANNER_SCREEN } from '../constants';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const PageTitle = styled.Text`
  font-size: 24px;
`;
const PageDesc = styled.Text`
  color: black;
`;

const HeaderSection = styled.View`
  padding-vertical: 20px;
  align-items: center;
`;

const ListGroup = styled.View`
  padding-vertical: 20px;
`;
const ListItem = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-horizontal: 20px;
`;
const ListText = styled.Text`
  color: black;
`;
const ItemPoint = styled.Text`
  color: red;
`;

const Section = styled.View`
  padding-vertical: 20px;
`;
const StyledButton = styled.TouchableOpacity`
  background: blue;
  margin-horizontal: 20px;
  padding-vertical: 10px;
  padding-horizontal: 10px;
  border-radius: 5px;
  align-items: center;
`;
const ButtonTitle = styled.Text`
  color: white;
`;

class Activity extends Component {
  // iOS only
  alertUserOfAccessRequirement = permission => {
    console.log('permission: ', permission);

    Alert.alert('Can we access your camera?', 'We need access to allow you to scan QR code', [
      {
        text: 'No',
        onPress: () => console.log('Permission denied'),
        style: 'cancel'
      },
      permission === 'undetermined'
        ? { text: 'OK', onPress: this.requestPermission }
        : { text: 'Open Settings', onPress: () => Permissions.openSettings() }
    ]);
  };

  requestPermission = () => {
    const { navigation } = this.props;
    Permissions.request('camera')
      .then(response => {
        console.log('response');
        if (response !== 'authorized') {
          const buttons = [{ text: 'Cancel', style: 'cancel' }];
          if (Permissions.canOpenSettings())
            buttons.push({
              text: 'Open Settings',
              onPress: () => Permissions.openSettings()
            });
          Alert.alert(
            'Warning!',
            'There was a problem getting your permission. Please enable it from settings.',
            buttons
          );
        } else {
          navigation.navigate(SCANNER_SCREEN);
        }
      })
      .catch(e => console.warn(e));
  };

  scanQRCode = () => {
    const { navigation } = this.props;
    Permissions.check('camera').then(response => {
      if (response === 'authorized') {
        navigation.navigate(SCANNER_SCREEN);
      } else {
        this.alertUserOfAccessRequirement(response);
      }
    });
  };

  render() {
    return (
      <Container>
        <HeaderSection>
          <PageTitle>Collect Coffee</PageTitle>
          <PageDesc>Select how you take your coffee</PageDesc>
        </HeaderSection>
        <Section>
          <ListGroup>
            <ListItem>
              <ListText>Mug / Cup</ListText>
              <ItemPoint>10 pts</ItemPoint>
            </ListItem>
          </ListGroup>
        </Section>
        <Section>
          <StyledButton onPress={() => this.scanQRCode()}>
            <ButtonTitle>Scan Code</ButtonTitle>
          </StyledButton>
        </Section>
      </Container>
    );
  }
}

Activity.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default Activity;
