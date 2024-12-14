import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { UseFormRegister } from 'react-hook-form';
import { LoginFormData } from './types';

const CheckboxGroup = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const CheckboxLabel = styled.label`
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

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