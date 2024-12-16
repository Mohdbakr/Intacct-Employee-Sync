import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Form = styled(motion.form)`
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

export const ForgotPassword = styled(motion.a)`
color: ${({ theme }) => theme.colors.gradientEnd};
text-decoration: none;
font-size: 0.9rem;
display: block;
text-align: right;
margin-top: 1rem;

&:hover {
  text-decoration: underline;
}
`;

export const Divider = styled(motion.p)`
color: ${({ theme }) => theme.colors.text.secondary};
margin: 1rem 0;
text-align: center;
`;