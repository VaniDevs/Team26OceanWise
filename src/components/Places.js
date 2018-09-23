import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg};
`;

function Places() {
  return <Container />;
}

export default Places;
