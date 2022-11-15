import styled, { css } from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';

export type HeaderTypeStyleProps = 'GOOD' | 'BAD' | 'NONE';

type HeaderProps = {
  type: HeaderTypeStyleProps;
};

export const Container = styled.View<HeaderProps>`
  width: 100%;
  height: 200px;

  padding: 32px 24px;

  background-color: ${({ theme, type }) =>
    type === 'GOOD'
      ? theme.COLORS.SUCCESS_LIGHT
      : type === 'BAD'
      ? theme.COLORS.ATTENTION_LIGHT
      : theme.COLORS.BACKGROUND_500};

  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}

  margin: 0 auto;
`;

export const PercentContainer = styled.View`
  flex-direction: column;

  margin: 16px auto;
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
`;

export const Icon = styled(ArrowLeft).attrs(() => ({
  size: 24,
}))``;
