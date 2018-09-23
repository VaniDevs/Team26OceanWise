import React, { Component } from 'react';
import { Alert, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Permissions from 'react-native-permissions';

import BackButton from './common/BackButton';
import { SCANNER_SCREEN } from '../constants';
import {
  fontFamily,
  colors,
  Container,
  Section,
  StyledButton,
  ButtonInner,
  StyledButtonShadow,
  ButtonTitle
} from '../styles';
import { iconArrowRight } from '../../assets/images';

const PageTitle = styled.Text`
  font-family: ${fontFamily.plexMonoBold};
  font-size: 15px;
  color: ${colors.label};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HeaderSection = styled.View`
  position: relative;
  padding-vertical: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Card = styled.View`
  padding-vertical: 20px;
  background: white;
  border-radius: 9px;
  box-shadow: 0 20px 10px rgba(96, 60, 9, 0.2);
`;
const ListHeader = styled.View`
  padding-vertical: 10px;
  margin-vertical: 20px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: rgba(96, 60, 9, 0.2);
  border-bottom-width: 1px;
  border-bottom-color: rgba(96, 60, 9, 0.2);
`;
const ListLabel = styled.Text`
  padding-horizontal: 10px;
  color: ${colors.label};
  font-size: 12px;
  font-family: ${fontFamily.plexMono};
  text-transform: uppercase;
`;
const ListItem = styled.KeyboardAvoidingView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
  margin-vertical: 20px;
`;
const ListText = styled.Text`
  color: ${colors.label};
  font-size: 16px;
  font-family: ${fontFamily.plexSansMedium};
  margin-horizontal: 10px;
`;
const ListNumber = styled.Text`
  color: ${colors.secondary};
  font-family: ${fontFamily.plexSansBold};
  text-align: center;
  font-size: 20px;
`;

const textInputStyle = {
  width: 37,
  height: 42,
  borderColor: 'gray',
  borderWidth: 1,
  backgroundColor: 'white',
  borderRadius: 3,
  paddingVertical: 10,
  paddingHorizontal: 10,
  textAlign: 'center'
};

class Activity extends Component {
  state = {
    cupQuantity: null,
    lidQuantity: null,
    togoQuantity: null
  };

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
    Permissions.request('camera')
      .then(response => {
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
          this.navigateToScanner();
        }
      })
      .catch(e => console.warn(e));
  };

  calculateEnviroPoints = () => {
    const { cupQuantity, lidQuantity } = this.state;

    let enviroPoints = 0;

    if (cupQuantity) {
      enviroPoints += cupQuantity * 100;
    }
    if (lidQuantity) {
      enviroPoints += lidQuantity * 25;
    }
    return enviroPoints;
  };

  navigateToScanner = () => {
    const { navigation } = this.props;
    const { cupQuantity, togoQuantity, lidQuantity } = this.state;

    const cupsSaved = cupQuantity ? Number(cupQuantity) : 0;

    const enviroPoints = this.calculateEnviroPoints();
    navigation.navigate({
      routeName: SCANNER_SCREEN,
      params: {
        enviroPoints,
        cupsSaved,
        togoQuantity,
        lidQuantity
      }
    });
  };

  scanQRCode = () => {
    Permissions.check('camera').then(response => {
      if (response === 'authorized') {
        this.navigateToScanner();
      } else {
        this.alertUserOfAccessRequirement(response);
      }
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Section>
          <Card>
            <HeaderSection>
              <BackButton
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <PageTitle>Serving Type</PageTitle>
            </HeaderSection>

            <ListHeader>
              <ListLabel numberOfLines={1} style={{ width: '20%', textAlign: 'center' }}>
                Qty
              </ListLabel>
              <ListLabel numberOfLines={1} style={{ width: '40%' }}>
                Type
              </ListLabel>
              <ListLabel numberOfLines={1} style={{ width: '20%', textAlign: 'center' }}>
                Points
              </ListLabel>
              <ListLabel numberOfLines={1} style={{ width: '20%', textAlign: 'center' }}>
                Save
              </ListLabel>
            </ListHeader>

            <ListItem>
              <TextInput
                style={textInputStyle}
                keyboardType="numeric"
                returnKeyType="done"
                onChangeText={cupQuantity => this.setState({ cupQuantity })}
                value={this.state.cupQuantity}
              />
              <ListText style={{ width: '40%' }}>Reusable cup or in-store mug</ListText>
              <ListNumber style={{ width: '20%' }}>{Number(this.state.cupQuantity) * 100}</ListNumber>
              <ListNumber style={{ width: '20%', textAlign: 'right' }}>
                {`${Number(this.state.cupQuantity) * -10}c`}
              </ListNumber>
            </ListItem>

            <ListItem>
              <TextInput
                style={textInputStyle}
                keyboardType="numeric"
                returnKeyType="done"
                onChangeText={lidQuantity => this.setState({ lidQuantity })}
                value={this.state.lidQuantity}
              />
              <ListText style={{ width: '40%' }}>No lid</ListText>
              <ListNumber style={{ width: '20%' }}>{Number(this.state.lidQuantity) * 25}</ListNumber>
              <ListNumber style={{ width: '20%', textAlign: 'right' }}>0c</ListNumber>
            </ListItem>

            <ListItem>
              <TextInput
                style={textInputStyle}
                keyboardType="numeric"
                returnKeyType="done"
                onChangeText={togoQuantity => this.setState({ togoQuantity })}
                value={this.state.togoQuantity}
              />
              <ListText style={{ width: '40%' }}>To go cup</ListText>
              <ListNumber style={{ width: '20%' }}>0</ListNumber>
              <ListNumber style={{ width: '20%', textAlign: 'right' }}>0c</ListNumber>
            </ListItem>
          </Card>
        </Section>

        <Section>
          <StyledButton
            onPress={() => {
              const { cupQuantity, lidQuantity, togoQuantity } = this.state;
              if (cupQuantity || lidQuantity || togoQuantity) {
                this.scanQRCode();
              }
            }}>
            <StyledButtonShadow />
            <ButtonInner>
              <ButtonTitle>SCAN</ButtonTitle>
              <Image source={iconArrowRight} style={{ marginHorizontal: 10 }} />
            </ButtonInner>
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
