import { Link } from 'react-router-dom';
import { Container, Title, Description } from './Landing.styles';

export const LandingPage = () => {
  return (
    <Container>
      <Title>Welcome to Our App</Title>
      <Description>This is the landing page, accessible to everyone.</Description>
      <Link to="/login">Go to Login</Link> {/* Link to login page */}
    </Container>
  );
};
