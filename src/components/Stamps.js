import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'react-native';
import {
  fontFamily,
  colors,
  Container,
  Section,
  StyledButton,
  ButtonInner,
  StyledButtonShadow,
  ButtonTitle
} from '../styles';
import {
  iconArrowRight,
  iconDot,
  iconDotActive,
  iconFreeCoffee,
  iconFreeCoffeeActive,
  bgCelebrate
} from '../../assets/images';
import BackButton from './common/BackButton';
import { IMPACT_SCREEN } from '../constants';

const HeaderSection = styled.View`
  position: relative;
  padding-vertical: 10px;
  width: 100%;
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

function Stamps({ navigation }) {
  const stampIcons = new Array(10).fill();
  const { logo, coffeeAmount, coffeeHouse } = navigation.state.params;

  return (
    <Container>
      <Section>
        <Card>
          <HeaderSection>
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          </HeaderSection>
          <Image source={logo} style={{ marginHorizontal: 10, alignSelf: 'center' }} />
          <CardDesc>{coffeeHouse}</CardDesc>
          <StampContainer>
            <StampLabel>{`${coffeeAmount}/10`}</StampLabel>
            <StampList>
              {stampIcons.map((item, index) => {
                if (index < coffeeAmount) {
                  return <Image source={iconDotActive} />;
                }
                if (index === stampIcons.length - 1) {
                  return <Image source={iconFreeCoffee} />;
                }
                return <Image source={iconDot} />;
              })}
            </StampList>
          </StampContainer>
        </Card>
      </Section>

      <Section>
        <StyledButton
          onPress={() => {
            navigation.popToTop();
            navigation.navigate(IMPACT_SCREEN);
          }}>
          <StyledButtonShadow />
          <ButtonInner>
            <ButtonTitle>Finish</ButtonTitle>
            <Image source={iconArrowRight} style={{ marginHorizontal: 10 }} />
          </ButtonInner>
        </StyledButton>
      </Section>
    </Container>
  );
}
Stamps.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        coffeeHouse: PropTypes.string.isRequired,
        logo: PropTypes.number.isRequired,
        coffeeAmount: PropTypes.number
      })
    }),
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default Stamps;
