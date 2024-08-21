import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { FieldError } from 'react-hook-form';

import {
  Container,
  ContainerInput,
  Label,
  TextError,
  TextInputComponent,
} from './styles';

type InputProps = TextInputProps & {
  label: string;
  errorMessage?: FieldError | undefined;
  editable?: boolean;
};

const Input = React.forwardRef<TextInput, InputProps>(
  (
    { label, errorMessage = undefined, editable = true, ...rest }: InputProps,
    ref,
  ) => {
    const error = errorMessage?.message !== undefined;

    return (
      <Container>
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
