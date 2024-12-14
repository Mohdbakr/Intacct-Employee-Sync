import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const GradientButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.gradientStart},
    ${props => props.theme.colors.gradientEnd}
  );
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.theme.colors.inputFocus};
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

export const SocialButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.inputBorder};
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.default};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;