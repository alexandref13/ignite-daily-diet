import {
  PencilSimpleLine,
  Plus as PlusIcon,
  Trash as TrashIcon,
} from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.TEXT};
  `}
`;

export const Pencil = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.TEXT,
}))`
  margin-right: 12px;
`;

export const Trash = styled(TrashIcon).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BACKGROUND_100,
}))`
  margin-right: 12px;
`;

export const Plus = styled(PlusIcon).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.TEXT,
}))`
  margin-right: 12px;
`;
