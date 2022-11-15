import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  Container,
  Icon,
  PercentText,
  DietText,
  PercentTypeStyleProps,
} from './styles';

type PercentIconProps = TouchableOpacityProps & {
  percent: string;
  type?: PercentTypeStyleProps;
};

export function Percent({ type = 'GOOD', percent, ...rest }: PercentIconProps) {
  const { COLORS } = useTheme();

  return (
    <Container type={type} {...rest}>
      <Icon
        color={type === 'GOOD' ? COLORS.SUCCESS_DARK : COLORS.ATTENTION_DARK}
      />
      <PercentText>{`${percent}%`}</PercentText>
      <DietText>das refeições dentro da dieta</DietText>
    </Container>
  );
}
