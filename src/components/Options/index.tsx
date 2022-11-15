import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Content,
  SelectTypeStyleProps,
  Status,
  Title,
} from './styles';

type SelectProps = TouchableOpacityProps & {
  type?: SelectTypeStyleProps;
  isSelected?: boolean;
  title: string;
};

export function Options({
  type = 'GOOD',
  isSelected = false,
  title,
  ...rest
}: SelectProps) {
  return (
    <Container type={type} isSelected={isSelected} {...rest}>
      <Content>
        <Status type={type} />
        <Title>{title}</Title>
      </Content>

      {/* {type === 'GOOD' && (
        <Content>
          <Status type={type} isSelected={isSelected} />
          <Title>Sim</Title>
        </Content>
      )}

      {type === 'BAD' && (
        <Content>
          <Status type={type} isSelected={isSelected} />
          <Title>Não</Title>
        </Content>
      )} */}
    </Container>
  );
}
