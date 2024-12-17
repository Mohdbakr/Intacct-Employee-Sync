import { Container, Title, WelcomeMessage } from './Home.styles';

export const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to the Home Page</Title>
      <WelcomeMessage>This page is only accessible to authenticated users.</WelcomeMessage>
    </Container>
  );
};
