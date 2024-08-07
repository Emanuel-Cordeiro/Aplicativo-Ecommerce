import React from 'react';
import { ContainerInput, Label, TextInputComponent } from './styles';

type InputProps = {
  label: string;
};

const Input = ({ label }: InputProps) => {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <TextInputComponent />
    </ContainerInput>
  );
};

export default Input;
