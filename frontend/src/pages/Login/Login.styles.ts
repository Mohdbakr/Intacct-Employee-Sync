import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url('/backgroud.jpg');
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
  position: relative;
`;

export const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.gradientStart},
    ${props => props.theme.colors.gradientEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
