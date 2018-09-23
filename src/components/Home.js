import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'react-native';
import { ACTIVITY_SCREEN, STAMPS_SCREEN } from '../constants';
import { fontFamily, colors, Section, StyledButton, ButtonInner, StyledButtonShadow, ButtonTitle } from '../styles';
import { iconBrand, iconDiv, iconCup, iconArrowRight } from '../../assets/images';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.bg};
`;

const HeaderSection = styled.View`
  padding-vertical: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary};
`;
const HeaderText = styled.Text`
  font-family: ${fontFamily.plexMonoOblique};
  font-size: 24px;
  letter-spacing: 3px;
  color: ${colors.primary};
`;

const BodySection = styled.View`
  padding-vertical: 20px;
  align-items: center;
`;
const BrandTitle = styled.Text`
  margin-vertical: 10px;
  font-size: 20px;
  font-family: ${fontFamily.plexMonoOblique};
  color: ${colors.secondary};
`;
const SubTitle = styled.Text`
  color: ${colors.fade};
  font-size: 12px;
  font-family: ${fontFamily.plexMonoBold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const EnviroPoints = styled.View`
  align-items: center;
`;
const PointNumber = styled.Text`
  color: ${colors.text};
  font-size: 90px;
  font-family: ${fontFamily.plexMono};
`;
const PointUnit = styled.Text`
  color: ${colors.fade};
  font-size: 16px;
  font-family: ${fontFamily.plexMonoBold};
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const SavingContainer = styled.View`
  flex-direction: row;
`;
const Savings = styled.Text`
  color: ${colors.primary};
  font-size: 15px;
  font-family: ${fontFamily.plexMonoBold};
  text-transform: uppercase;
  letter-spacing: 4px;
`;

function Home({ navigation }) {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {context => (
          <Container>
            <HeaderSection>
              <HeaderText>kafeewise</HeaderText>
            </HeaderSection>

            <BodySection>
              <Image source={iconBrand} />
              <BrandTitle>Seahorse</BrandTitle>
              <SubTitle>Achivement</SubTitle>
              <EnviroPoints>
                <PointNumber>{context.enviroPoints}</PointNumber>
                <PointUnit>enviro points</PointUnit>
              </EnviroPoints>
              <Image source={iconDiv} style={{ marginVertical: 20 }} />

              <SavingContainer>
                <Image source={iconCup} style={{ marginHorizontal: 10, marginVertical: 3 }} />
                <Savings>250 cups saved</Savings>
              </SavingContainer>
            </BodySection>

            <Section>
              <StyledButton
                onPress={() => {
                  navigation.navigate(STAMPS_SCREEN);
                }}
              >
                <StyledButtonShadow />
                <ButtonInner>
                  <ButtonTitle>Collect Stamps</ButtonTitle>
                  <Image source={iconArrowRight} style={{ marginHorizontal: 10 }} />
                </ButtonInner>
              </StyledButton>
            </Section>
          </Container>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default Home;
