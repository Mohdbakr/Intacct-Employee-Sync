import { NisumLogo } from '../components/NisumLogo';
import { LoginForm } from '../components/LoginForm';
import { SplitScreen } from '../components/layout/SplitScreen';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url('/src/assets/backgroud.jpg');
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
  position: relative;
`;

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
`;

const Title = styled(motion.h1)`
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

const LeftContent = () => (
  <>
    <NisumLogo />
  </>
);

const RightContent = () => (
  <FormContainer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
  >
    <Title>Welcome Back</Title>
    <LoginForm />
  </FormContainer>
);

export const LoginPage = () => {
  return (
    <Container>
      <SplitScreen
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
      />
    </Container>
  );
};