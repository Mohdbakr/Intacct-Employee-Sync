import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FormInput } from '../Input/FormInput';
import { FormCheckbox } from '../Checkbox/FormCheckbox';
import { PrimaryButton, SocialLoginButton } from '../Buttons/FormButton';
import { LoginFormData } from './types';
import { Form, ForgotPassword, Divider } from './Form.styles'
import { login } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';


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
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>();
  const { login: loginContext } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormData> = async (data: LoginFormData) => {
    try {
      setLoginError(null);
      const token = await login(data.email, data.password);
      loginContext(token); // This will now handle navigation
    } catch (error: any) {
      setLoginError(error.message || 'Authentication failed');
    }
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

      <PrimaryButton type="submit" variants={itemVariants} disabled={isSubmitting }>
        {isSubmitting  ? 'Logging in..' : 'Login'}
      </PrimaryButton>
      {loginError && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>
              {loginError}
          </div>
      )}
      
      <ForgotPassword href="#" variants={itemVariants}>
        Forgot Password?
      </ForgotPassword>

      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <Divider variants={itemVariants}>
          Or continue with
        </Divider>
        <SocialLoginButton 
          type="button" 
          variants={itemVariants} 
          icon={FaGoogle}
        >
          Continue with Google
        </SocialLoginButton>
        <SocialLoginButton 
          type="button" 
          variants={itemVariants} 
          icon={FaLinkedin}
        >
          Continue with LinkedIn
        </SocialLoginButton>
      </div>
    </Form>
  );
};