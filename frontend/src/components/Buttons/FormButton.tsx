import { ReactNode } from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { BaseButton, GradientButton, SocialButton } from './button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variants?: any;
}

interface SocialButtonProps extends ButtonProps {
  icon: typeof FaGoogle | typeof FaLinkedin;
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => (
  <GradientButton as={BaseButton} {...props}>
    {children}
  </GradientButton>
);

export const SocialLoginButton = ({ children, icon: Icon, ...props }: SocialButtonProps) => (
  <SocialButton as={BaseButton} {...props}>
    <Icon /> {children}
  </SocialButton>
);