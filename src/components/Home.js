import React from 'react';
import styled from 'styled-components';

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
    <Container>
      <StyledButton>
        <EnviroPoints>0</EnviroPoints>
        <Subtitle>EnviroPoints</Subtitle>
        <ButtonTitle>Activity</ButtonTitle>
        <ButtonTitle>Locate</ButtonTitle>
        <ButtonTitle>Activity</ButtonTitle>
      </StyledButton>
    </Container>
  );
}

export default Home;
