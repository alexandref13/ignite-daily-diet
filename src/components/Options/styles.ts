import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type SelectTypeStyleProps = 'GOOD' | 'BAD';

type SelectProps = {
  type: SelectTypeStyleProps;
  isSelected?: boolean;
};

export const Container = styled(TouchableOpacity)<SelectProps>`
  width: 48%;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type, isSelected }) =>
    type === 'GOOD' && isSelected
      ? theme.COLORS.SUCCESS_LIGHT
      : type === 'BAD' && isSelected
      ? theme.COLORS.ATTENTION_LIGHT
      : theme.COLORS.BACKGROUND_600};

  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, type, isSelected }) =>
    type === 'GOOD' && isSelected
      ? theme.COLORS.SUCCESS_DARK
      : type === 'BAD' && isSelected
      ? theme.COLORS.ATTENTION_DARK
      : theme.COLORS.BACKGROUND_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-left: 8px
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.BACKGROUND_100};
    `};
`;

export const Status = styled.View<SelectProps>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === 'GOOD' ? theme.COLORS.SUCCESS_DARK : theme.COLORS.ATTENTION_DARK};

  border-radius: 999px;
`;
