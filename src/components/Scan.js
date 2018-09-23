import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { POINTS_SCREEN } from '../constants';

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
const Text = styled.Text``;

class Scan extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      navigation.navigate(POINTS_SCREEN);
    }, 2000);
  }

  render() {
    return (
      <Container>
        <HeaderSection>
          <PageTitle>Scanning..</PageTitle>
          <PageDesc>Scan the coffee shop QA code sign to verify</PageDesc>
        </HeaderSection>
        <HeaderSection>
          <Text>Dummy</Text>
        </HeaderSection>
      </Container>
    );
  }
}

export default Scan;
