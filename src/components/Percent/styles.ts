import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type PercentTypeStyleProps = 'GOOD' | 'BAD';

type PercentProps = {
  type: PercentTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<PercentProps>`
  width: 100%;

  background-color: ${({ theme, type }) =>
    type === 'GOOD'
      ? theme.COLORS.SUCCESS_LIGHT
      : theme.COLORS.ATTENTION_LIGHT};

  padding: 20px 16px;
  margin-top: 33px;

  border-radius: 8px;
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
  align-self: center
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
  padding: 2px 16px;
  align-self: center;
`;

export const Icon = styled(ArrowUpRight).attrs(() => ({
  size: 32,
}))`
  position: absolute;
  right: 12px;
  top: 12px;
`;
