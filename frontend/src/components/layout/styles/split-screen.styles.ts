import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(110, 18, 255, 0.1), rgba(0, 206, 255, 0.05));
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 40vh;
  }
`;

export const RightPanel = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(10, 15, 30, 0.95);

  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

export const BrandingText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  max-width: 400px;
  margin-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;