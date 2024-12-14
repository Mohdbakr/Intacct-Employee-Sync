import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CheckboxGroup = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;