import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, ImageBackground } from 'react-native';
import { REDEEM_SCREEN } from '../constants';
import { fontFamily, colors, Section, StyledButton, ButtonInner, StyledButtonHalo, ButtonTitle } from '../styles';
import {
  iconArrowRight,
  iconChevronLeft,
  iconDot,
  iconDotActive,
  iconFreeCoffee,
  iconFreeCoffeeActive,
  logo29thParallel,
  bgCelebrate
} from '../../assets/images';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ;
`;
const HeaderSection = styled.View`
  position: relative;
  padding-vertical: 10px;
  width: 100%;
`;
const BackButton = styled.TouchableOpacity`
  padding-horizontal: 20px;
  position: absolute;
  left: 0;
`;

const Card = styled.View`
  padding-vertical: 20px;
  background: white;
  border-radius: 9px;
  box-shadow: 0 20px 10px rgba(96, 60, 9, 0.2);
`;
const CardDesc = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-family: ${fontFamily.plexSansBold};
  padding-horizontal: 20px;
  text-align: center;
`;

const StampContainer = styled.View`
  margin-vertical: 10px;
  padding-horizontal: 10px;
`;
const StampList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 10px;
`;
const StampLabel = styled.Text`
  color: ${colors.text};
  font-size: 12px;
  font-family: ${fontFamily.plexSansBold};
`;

const Message = styled.Text`
  color: white;
  font-size: 16px;
  font-family: ${fontFamily.plexSansBold};
  text-align: center;
  margin-vertical: 50px;
`;

function Stamps({ navigation }) {
  const resizeMode = 'center';
  return (
    <AppProvider>
      <AppContext.Consumer>
        {context => (
          <ImageBackground
            source={bgCelebrate}
            style={{
              flex: 1,
              resizeMode,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center'
            }}
          >
            <Section>
              <Card>
                <HeaderSection>
                  <BackButton
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Image source={iconChevronLeft} />
                  </BackButton>
                </HeaderSection>
                <Image source={logo29thParallel} style={{ marginHorizontal: 10, alignSelf: 'center' }} />
                <CardDesc>49th Parallel Café &amp; Lucky's Doughnuts - MAIN</CardDesc>

                <StampContainer>
                  <StampLabel>1/10</StampLabel>
                  <StampList>
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconDotActive} />
                    <Image source={iconFreeCoffeeActive} />
                  </StampList>
                </StampContainer>
              </Card>
              <Message>Woohooo! You have earned a free coffee in your cup or instore!</Message>
              <StyledButton
                onPress={() => {
                  navigation.navigate(REDEEM_SCREEN);
                }}
              >
                <StyledButtonHalo />
                <ButtonInner>
                  <ButtonTitle>Free Coffee</ButtonTitle>
                  <Image source={iconArrowRight} style={{ marginHorizontal: 10 }} />
                </ButtonInner>
              </StyledButton>
            </Section>
          </ImageBackground>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}
Stamps.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default Stamps;
