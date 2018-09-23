import styled from 'styled-components';

// fonts
export const fontFamily = {
  plexMono: 'IBMPlexMono',
  plexMonoBold: 'IBMPlexMono-SemiBold',
  plexMonoOblique: 'IBMPlexMono-BoldItalic',
  plexSans: 'IBMPlexSans',
  plexSansMedium: 'IBMPlexSans-Medium',
  plexSansBold: 'IBMPlexSans-SemiBold',
  plexSansOblique: 'IBMPlexSans-BoldItalic'
};

// colors
export const colors = {
  bg: '#f2ebde',
  text: '#1d1c18',
  label: '#603C09',
  fade: '#A9A595',
  primary: '#142C46',
  secondary: '#0896BD',
  accent: '#fc954c'
};

// styles
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.bg};
`;

export const Section = styled.View`
  margin-horizontal: 24px;
  padding-vertical: 50px;
`;
export const StyledButton = styled.TouchableOpacity`
  position: relative;
  align-items: center;
`;
export const ButtonInner = styled.View`
  background: ${colors.primary};
  padding-vertical: 10px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 240px;
  margin-left: 20px;
`;
export const StyledButtonShadow = styled.View`
  position: absolute;
  height: 48px;
  background: ${colors.accent};
  border-radius: 5px;
  z-index: 0;
  width: 240px;
  bottom: -10px;
`;
export const StyledButtonHalo = styled.View`
  position: absolute;
  height: 48px;
  background: #ffe47c;
  border-radius: 5px;
  z-index: 0;
  width: 240px;
  bottom: -10px;
`;
export const ButtonTitle = styled.Text`
  color: ${colors.bg};
  font-family: ${fontFamily.plexMonoBold};
  font-size: 16px;
  letter-spacing: 1px;
  padding-horizontal: 10px;
`;
