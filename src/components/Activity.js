import React from 'react';
import styled from 'styled-components';

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

function Activity() {
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
        <StyledButton
          onPress={() => {
            navigation.navigate(ACTIVITY_SCREEN);
          }}
        >
          <ButtonTitle>Scan Code</ButtonTitle>
        </StyledButton>
      </Section>
    </Container>
  );
}

export default Activity;
