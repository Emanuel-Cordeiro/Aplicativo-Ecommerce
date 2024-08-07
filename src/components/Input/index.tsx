import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { ContainerInput, Label, TextInputComponent } from './styles';

type InputProps = TextInputProps & {
  label: string;
};

const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, ...rest }: InputProps, ref) => {
    return (
      <ContainerInput>
        <Label>{label}</Label>
        <TextInputComponent ref={ref} {...rest} />
      </ContainerInput>
    );
  },
);

export default Input;
