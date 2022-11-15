import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Content = styled.View`
  margin-top: -60px;

  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 20px;

  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}

  margin-top: 10px;
  margin-bottom: 24px;
`;

export const InfoMeals = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
