import { UseFormRegister } from 'react-hook-form';
import { LoginFormData } from '../form/types';
import { CheckboxGroup, CheckboxLabel } from './checkbox.styles';

interface FormCheckboxProps {
  label: string;
  name: keyof LoginFormData;
  register: UseFormRegister<LoginFormData>;
  variants?: any;
}

export const FormCheckbox = ({ label, name, register, variants }: FormCheckboxProps) => (
  <CheckboxGroup variants={variants}>
    <CheckboxLabel>
      <input type="checkbox" {...register(name)} />
      <span>{label}</span>
    </CheckboxLabel>
  </CheckboxGroup>
);