import React from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput, TextInputProps, View } from 'react-native';

import {
  Container,
  ContainerInput,
  Label,
  TextError,
  TextInputComponent,
} from './styles';

type InputProps = TextInputProps & {
  label: string;
  editable?: boolean;
  errorMessage?: FieldError | undefined;
};

const Input = React.forwardRef<TextInput, InputProps>(
  (
    { label, errorMessage = undefined, editable = true, ...rest }: InputProps,
    ref,
  ) => {
    const error = errorMessage?.message !== undefined;

    return (
      <Container error={error}>
        <ContainerInput>
          <Label>{label}</Label>
          <TextInputComponent ref={ref} editable={editable} {...rest} />
          {error ? <TextError>{errorMessage?.message}</TextError> : <View />}
        </ContainerInput>
      </Container>
    );
  },
);

export default Input;
