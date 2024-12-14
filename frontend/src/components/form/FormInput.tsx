import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { UseFormRegister } from 'react-hook-form';
import { LoginFormData } from './types';

const InputGroup = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.theme.colors.inputBorder};
  border-radius: 8px;
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.inputFocus};
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ErrorMessage = styled(motion.span)`
  color: ${props => props.theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

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