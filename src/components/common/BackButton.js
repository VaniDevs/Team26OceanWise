import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { iconChevronLeft, backArrowWhite } from '../../../assets/images';

const ButtonContainer = styled.TouchableOpacity`
  padding-horizontal: 20px;
  position: absolute;
  left: 0;
`;

function BackButton({ isWhite, onPress }) {
  const image = isWhite ? backArrowWhite : iconChevronLeft;
  return (
    <ButtonContainer onPress={onPress}>
      <Image source={image} />
    </ButtonContainer>
  );
}

BackButton.defaultProps = {
  isWhite: false
};
BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isWhite: PropTypes.bool
};
export default BackButton;
