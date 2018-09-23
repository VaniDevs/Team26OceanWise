import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ACTIVITY_SCREEN } from '../constants';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f2ebde;
`;

const HeaderSection = styled.View`
  padding-vertical: 20px;
  align-items: center;
`;
const EnviroPoints = styled.View`
  align-items: center;
`;
const SubTitle = styled.Text`
  color: black;
  font-size: 16px;
`;
const PointNumber = styled.Text`
  color: #1d1c18;
  font-size: 90px;
  font-family: 'IBMPlexMono-Bold';
`;
const PointUnit = styled.Text`
  color: black;
  font-size: 20px;
`;

const Section = styled.View`
  margin-horizontal: 50px;
  padding-vertical: 20px;
`;
const StyledButton = styled.TouchableOpacity`
  position: relative;
`;
const ButtonInner = styled.View`
  background: #142c46;
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
  background: #fc954c;
  border-radius: 5px;
  z-index: 0;
  width: 100%;
  bottom: -10px;
  left: -10px;
`;
const ButtonTitle = styled.Text`
  color: white;
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
                <PointUnit>points</PointUnit>
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
