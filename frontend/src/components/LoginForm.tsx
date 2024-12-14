import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FormInput } from './form/FormInput';
import { FormCheckbox } from './form/FormCheckbox';
import { GradientButton, SocialButton } from './form/FormButton';
import { LoginFormData } from './form/types';

const Form = styled(motion.form)`
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

const ForgotPassword = styled(motion.a)`
  color: ${props => props.theme.colors.gradientEnd};
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  text-align: right;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled(motion.p)`
  color: ${props => props.theme.colors.text.secondary};
  margin: 1rem 0;
  text-align: center;
`;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Email"
        type="email"
        name="email"
        register={register}
        error={errors.email?.message}
        variants={itemVariants}
      />

      <FormInput
        label="Password"
        type="password"
        name="password"
        register={register}
        error={errors.password?.message}
        variants={itemVariants}
      />

      <FormCheckbox
        label="Remember me"
        name="rememberMe"
        register={register}
        variants={itemVariants}
      />

      <GradientButton type="submit" variants={itemVariants}>
        Login
      </GradientButton>
      
      <ForgotPassword href="#" variants={itemVariants}>
        Forgot Password?
      </ForgotPassword>

      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <Divider variants={itemVariants}>
          Or continue with
        </Divider>
        <SocialButton type="button" variants={itemVariants}>
          <FaGoogle /> Continue with Google
        </SocialButton>
        <SocialButton type="button" variants={itemVariants}>
          <FaLinkedin /> Continue with LinkedIn
        </SocialButton>
      </div>
    </Form>
  );
};