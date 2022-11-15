import { MaskInputProps } from 'react-native-mask-input';

import {
  Container,
  InputContainer,
  Title,
  InputTypeStyleProps,
  ErrorMessage,
} from './styles';

type InputProps = MaskInputProps & {
  title: string;
  type?: InputTypeStyleProps;
  errorMessage?: string | null;
};

export function Input({
  errorMessage = null,
  type = 'NORMAL',
  title,
  ...rest
}: InputProps) {
  const invalid = !!errorMessage;
  return (
    <Container type={type} isInvalid={invalid}>
      <Title>{title}</Title>
      <InputContainer
        isInvalid={invalid}
        style={{
          textAlign: 'left',
          textAlignVertical: 'top',
        }}
        {...rest}
      />
      {errorMessage && (
        <ErrorMessage type={type} isInvalid={invalid}>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
}
