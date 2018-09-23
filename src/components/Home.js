import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ACTIVITY_SCREEN } from '../constants';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: center;
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
  color: black;
  font-size: 100px;
`;
const PointUnit = styled.Text`
  color: black;
  font-size: 20px;
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
                <ButtonTitle>Collect Coffee</ButtonTitle>
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
