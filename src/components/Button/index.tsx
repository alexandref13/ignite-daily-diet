import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import { Container, Pencil, Plus, Title, Trash } from './styles';

type ButtonProps = TouchableOpacityProps & {
  hasIcon?: boolean;
  iconName?: 'PLUS' | 'TRASH' | 'PENCIL';
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};

export function Button({
  hasIcon = false,
  iconName = 'PLUS',
  title,
  titleStyle,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest}>
      {hasIcon ? (
        iconName === 'TRASH' ? (
          <Trash />
        ) : iconName === 'PENCIL' ? (
          <Pencil />
        ) : (
          <Plus />
        )
      ) : null}

      <Title style={titleStyle}>{title}</Title>
    </Container>
  );
}
