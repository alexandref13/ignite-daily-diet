import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type MealCardTypeStyleProps = 'GOOD' | 'BAD';

type MealCardProps = {
  type: MealCardTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  min-height: 50px;
  max-height: 50px;

  flex-direction: row;
  align-items: center;

  padding: 14px 16px 14px 12px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 6px;

  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
`;

export const Divider = styled.View`
  margin: 0 12px;

  height: 14px;
  width: 1px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BACKGROUND_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  max-width: 220px
`;

export const ContentMeal = styled.View`
  flex: 1;

  align-items: flex-start;
  justify-content: flex-start;
`;

export const Status = styled.View<MealCardProps>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, type }) =>
    type === 'GOOD' ? theme.COLORS.SUCCESS_MID : theme.COLORS.ATTENTION_MID};

  border-radius: 999px;
`;
