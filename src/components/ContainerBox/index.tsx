import { ViewProps } from 'react-native';
import { Container, ContainerBoxTypeStyleProps, Number, Title } from './styles';

type ContainerBoxProps = ViewProps & {
  type?: ContainerBoxTypeStyleProps;
  number: string;
  title: string;
};

export function ContainerBox({
  type = 'NONE',
  number,
  title,
  ...rest
}: ContainerBoxProps) {
  return (
    <Container type={type} {...rest}>
      <Number>{number}</Number>
      <Title>{title}</Title>
    </Container>
  );
}
