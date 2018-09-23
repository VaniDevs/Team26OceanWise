import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';
import { SCAN_SCREEN } from '../constants';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f2ebde;
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
  justify-content: space-between;
  align-items: flex-start;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;
const ListText = styled.Text`
  color: black;
`;
const ItemPoint = styled.Text`
  color: red;
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

class Activity extends PureComponent {
  state = {
    cup_qty: '0',
    lid_qty: '0'
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderSection>
          <PageTitle>Collect Coffee</PageTitle>
          <PageDesc>Select how you take your coffee</PageDesc>
        </HeaderSection>
        <Section>
          <ListGroup>
            <ListItem>
              <TextInput
                style={{
                  height: 24,
                  borderColor: 'gray',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  width: 50,
                  borderRadius: 3
                }}
                keyboardType="number-pad"
                onChangeText={cup_qty => this.setState({ cup_qty })}
                value={this.state.cup_qty}
              />
              <ListText>Mug / Cup</ListText>
              <ItemPoint>
                {Number(this.state.cup_qty) * 10}
                pts
              </ItemPoint>
            </ListItem>

            <ListItem>
              <TextInput
                style={{
                  height: 24,
                  borderColor: 'gray',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  width: 50,
                  borderRadius: 3
                }}
                keyboardType="number-pad"
                onChangeText={lid_qty => this.setState({ lid_qty })}
                value={this.state.lid_qty}
              />
              <ListText>ToGo with no lid</ListText>
              <ItemPoint>
                {Number(this.state.lid_qty) * 5}
                pts
              </ItemPoint>
            </ListItem>
          </ListGroup>
        </Section>
        <Section>
          <StyledButton
            onPress={() => {
              navigation.navigate(ACTIVITY_SCREEN);
            }}
          >
            <StyledButtonShadow />
            <ButtonInner>
              <ButtonTitle>SCAN</ButtonTitle>
            </ButtonInner>
          </StyledButton>
        </Section>
      </Container>
    );
  }
}

export default Activity;
