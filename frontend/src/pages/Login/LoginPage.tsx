import { NisumLogo } from '../../components/Logo/NisumLogo';
import { LoginForm } from '../../components/form/LoginForm';
import { SplitScreen } from '../../components/layout/SpliLayout/SplitScreen';
import { Container, FormContainer, Title } from './Login.styles';

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