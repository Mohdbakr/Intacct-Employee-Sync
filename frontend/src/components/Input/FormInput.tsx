import { UseFormRegister } from 'react-hook-form';
import { LoginFormData } from '../form/types';
import { InputGroup, Label, Input, ErrorMessage } from './input.styles';


interface FormInputProps {
  label: string;
  type: string;
  name: keyof LoginFormData;
  register: UseFormRegister<LoginFormData>;
  error?: string;
  variants?: any;
}

export const FormInput = ({ label, type, name, register, error, variants }: FormInputProps) => (
  <InputGroup variants={variants}>
    <Label>{label}</Label>
    <Input type={type} {...register(name)} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </InputGroup>
);