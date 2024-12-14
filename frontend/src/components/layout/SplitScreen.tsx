import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding:0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled(motion.div)`
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

const RightPanel = styled(motion.div)`
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

const BrandingText = styled(motion.p)`
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: left;
  max-width: 400px;
  margin-top: 2rem;
  font-size: 1.85rem;
  line-height: 1.6;
`;

interface SplitScreenProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const SplitScreen = ({
  leftContent,
  rightContent,
}: SplitScreenProps) => {
  return (
    <Container>
      <LeftPanel
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {leftContent}
        <BrandingText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Building Success Together®
        </BrandingText>
      </LeftPanel>
      <RightPanel
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {rightContent}
      </RightPanel>
    </Container>
  );
};
