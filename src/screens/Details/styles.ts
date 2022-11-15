import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type DetailsTypeStyleProps = 'GOOD' | 'BAD';

type DetailsProps = {
  type: DetailsTypeStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
export const Content = styled.View`
  margin-top: -100px;

  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}

  margin-bottom: 8px;
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
  margin-bottom: 24px;
`;
export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
  margin-bottom: 8px;
`;
export const DateTimeValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
  margin-bottom: 24px;
`;
export const InDietContainer = styled.View`
  width: 150px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 999px;
`;
export const InDietStatus = styled.View<DetailsProps>`
  width: 10px;
  height: 10px;

  border-radius: 999px;

  background-color: ${({ theme, type }) =>
    type === 'GOOD' ? theme.COLORS.SUCCESS_DARK : theme.COLORS.ATTENTION_DARK};

  margin-right: 8px;
`;
export const InDietText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
`;

export const ButtonContainer = styled.View`
  padding: 24px;
`;
