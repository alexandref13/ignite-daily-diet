import styled, { css } from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

export type InputTypeStyleProps = 'MEDIUM' | 'NORMAL';

type InputProps = {
  type?: InputTypeStyleProps;
  isInvalid: boolean;
};

export const Container = styled.View<InputProps>`
  width: ${({ type }) => (type === 'NORMAL' ? '100%' : '48%')};
  margin-bottom: ${({ isInvalid }) => (isInvalid ? '0px' : '24px')};
`;

export const InputContainer = styled(MaskInput)<InputProps>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, isInvalid }) =>
    isInvalid ? theme.COLORS.ATTENTION_DARK : theme.COLORS.BACKGROUND_500};
  border-radius: 6px;

  padding: 14px;

  align-items: center;
  justify-content: center;

  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BACKGROUND_100};
  `}
`;
export const Title = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BACKGROUND_200};
  `}
`;
export const ErrorMessage = styled.Text<InputProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.ATTENTION_DARK};
  `}

  margin-bottom: ${({ isInvalid }) => (isInvalid ? '24px' : '0px')};
`;
