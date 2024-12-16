import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  width: 700px;
  height: 120px;
  position: relative;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 180px;
    height: 90px;
  }
`;

export const LogoSVG = styled(motion.svg)`
  width: 100%;
  height: 100%;
`;

export const LogoPath = styled(motion.path)`
  fill: url(#logoGradient);
`;

export const LogoText = styled(motion.text)`
  fill: #fff; 
  font-size: 300px; 
  font-weight: bold; 
@media (max-width: 768px) {
    font-size: 200px; 
  }
`;

export const RegisteredMark = styled(motion.text)`
  fill: #fff;
  font-size: 16px;
  font-family: 'Arial, Helvetica, sans-serif';
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;