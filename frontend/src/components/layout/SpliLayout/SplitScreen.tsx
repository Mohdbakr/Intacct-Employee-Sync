import { Container, LeftPanel, RightPanel, BrandingText } from './split-screen.styles';

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
