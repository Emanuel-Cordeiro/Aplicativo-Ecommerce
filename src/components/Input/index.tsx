import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import {
  Container,
  ContainerInput,
  Label,
  TextError,
  TextInputComponent,
} from './styles';
import { FieldError } from 'react-hook-form';

type InputProps = TextInputProps & {
  label: string;
  errorMessage: FieldError | undefined;
};

const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, errorMessage, ...rest }: InputProps, ref) => {
    const error = errorMessage?.message !== undefined;

    return (
      <Container>
        <ContainerInput>
          <Label>{label}</Label>
          <TextInputComponent ref={ref} {...rest} />
          {error ? <TextError>{errorMessage?.message}</TextError> : <View />}
        </ContainerInput>
      </Container>
    );
  },
);

export default Input;
