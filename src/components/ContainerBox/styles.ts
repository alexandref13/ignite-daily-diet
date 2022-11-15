import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ContainerBoxTypeStyleProps = 'GOOD' | 'BAD' | 'NONE';

type ContainerBoxProps = {
  type: ContainerBoxTypeStyleProps;
};

export const Container = styled(View)<ContainerBoxProps>`
  width: 100%;

  padding: 16px;
  margin-bottom: 12px;

  background-color: ${({ theme, type }) =>
    type === 'GOOD'
      ? theme.COLORS.SUCCESS_LIGHT
      : type === 'BAD'
      ? theme.COLORS.ATTENTION_LIGHT
      : theme.COLORS.BACKGROUND_600};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
  text-align: center;
`;
