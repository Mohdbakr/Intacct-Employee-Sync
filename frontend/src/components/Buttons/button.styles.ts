import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const BaseButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const GradientButton = styled(BaseButton)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gradientStart},
    ${({ theme }) => theme.colors.gradientEnd}
  );
  color: ${({ theme }) => theme.colors.white};
  border: none;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const SocialButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.colors.inputFocus};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;