import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ACTIVITY_SCREEN, fontFamily, colors } from '../constants';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.bg};
`;

const HeaderSection = styled.View`
  padding-vertical: 20px;
  align-items: center;
`;
const EnviroPoints = styled.View`
  align-items: center;
`;
const SubTitle = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-family: ${fontFamily.plexMono};
`;
const PointNumber = styled.Text`
  color: ${colors.text};
  font-size: 90px;
  font-family: ${fontFamily.plexMonoBold};
`;
const PointUnit = styled.Text`
  color: ${colors.subText};
  font-size: 20px;
  font-family: ${fontFamily.plexMonoBold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Section = styled.View`
  margin-horizontal: 50px;
  padding-vertical: 20px;
`;
const StyledButton = styled.TouchableOpacity`
  position: relative;
`;
const ButtonInner = styled.View`
  background: ${colors.button};
  padding-vertical: 10px;
  padding-horizontal: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 48px;
`;
const StyledButtonShadow = styled.View`
  position: absolute;
  height: 48px;
  background: ${colors.buttonShadow};
  border-radius: 5px;
  z-index: 0;
  width: 100%;
  bottom: -10px;
  left: -10px;
`;
const ButtonTitle = styled.Text`
  color: ${colors.bg};
`;

function Home({ navigation }) {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {context => (
          <Container>
            <HeaderSection>
              <SubTitle>Seedling</SubTitle>
              <EnviroPoints>
                <PointNumber>{context.enviroPoints}</PointNumber>
                <PointUnit>enviro points</PointUnit>
              </EnviroPoints>
            </HeaderSection>
            <Section>
              <StyledButton
                onPress={() => {
                  navigation.navigate(ACTIVITY_SCREEN);
                }}
              >
                <StyledButtonShadow />
                <ButtonInner>
                  <ButtonTitle>Collect Stamps</ButtonTitle>
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
