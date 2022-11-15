import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Content = styled.ScrollView`
  margin-top: -100px;

  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 20px;
`;
export const Form = styled.View`
  margin-top: 40px;
`;

export const ContainerInRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const YouAreIn = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
  margin-bottom: 8px;
`;
