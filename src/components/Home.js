import React from 'react';
import styled from 'styled-components';

import AppProvider, { AppContext } from '../AppProvider';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: gray;
  height: 40;
`;

const ButtonTitle = styled.Text`
  color: black;
`;

const EnviroPoints = styled.Text`
  color: black;
`;

const Subtitle = styled.Text`
  color: black;
`;

function Home() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {context => (
          <Container>
            <EnviroPoints>{context.enviroPoints}</EnviroPoints>
            <Subtitle>EnviroPoints</Subtitle>
            <ButtonTitle>Activity</ButtonTitle>
            <ButtonTitle>Locate</ButtonTitle>
            <StyledButton>
              <ButtonTitle>Activity</ButtonTitle>
            </StyledButton>
          </Container>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default Home;
