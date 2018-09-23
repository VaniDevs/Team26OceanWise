import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'react-native';

import { fontFamily, colors, Container, Section } from '../styles';
import { iconBrand, iconBrandSeal } from '../../assets/images';

const HeaderSection = styled.View`
  position: relative;
  padding-vertical: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.Text`
  color: ${colors.primary};
  font-family: ${fontFamily.plexMonoBold};
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const ListHeader = styled.View`
  padding-vertical: 10px;
  margin-vertical: 20px;
  flex-direction: row;
  justify-content: space-evenly;
`;
const ListLabel = styled.Text`
  color: ${colors.label};
  font-size: 13px;
  font-family: ${fontFamily.plexMonoBold};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
`;
const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
  margin-vertical: 20px;
`;
const ListCell = styled.View`
  width: 50%;
  padding-horizontal: 10px;
  align-items: center;
`;
const ListNumber = styled.Text`
  color: ${colors.label};
  text-align: center;
  font-size: 22px;
  font-family: ${fontFamily.plexMonoBold};
  margin-vertical: 10px;
`;
const ListUnit = styled.Text`
  color: ${colors.fade};
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

function Impact({ screenProps }) {
  const { context } = screenProps;
  return (
    <Container>
      <Section>
        <HeaderSection>
          <PageTitle>Impact</PageTitle>
        </HeaderSection>
        <ListHeader>
          <ListLabel numberOfLines={1}>You</ListLabel>
          <ListLabel numberOfLines={1}>Community</ListLabel>
        </ListHeader>

        <ListItem>
          <ListCell>
            <ListNumber>{context.cupsSaved}</ListNumber>
            <ListUnit>cups saved</ListUnit>
          </ListCell>
          <ListCell>
            <ListNumber>220,500</ListNumber>
            <ListUnit>cups saved</ListUnit>
          </ListCell>
        </ListItem>

        <ListItem>
          <ListCell>
            <ListNumber>250</ListNumber>
            <ListUnit>weight (lbs)</ListUnit>
          </ListCell>
          <ListCell>
            <ListNumber>2,500,000</ListNumber>
            <ListUnit>weight (lbs)</ListUnit>
          </ListCell>
        </ListItem>

        <ListItem>
          <ListCell>
            <Image source={iconBrandSeal} style={{ marginVertical: 10 }} />
            <ListLabel>equivalent of Seal</ListLabel>
          </ListCell>
          <ListCell>
            <Image source={iconBrand} style={{ marginVertical: 10 }} />
            <ListLabel>equivalent of Whale</ListLabel>
          </ListCell>
        </ListItem>
      </Section>
    </Container>
  );
}

Impact.propTypes = {
  screenProps: PropTypes.shape({
    context: PropTypes.shape({}).isRequired
  }).isRequired
};

export default Impact;
