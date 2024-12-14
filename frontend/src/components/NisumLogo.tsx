import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const LogoContainer = styled.div`
  width: 700px;
  height: 120px;
  position: relative;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 180px;
    height: 90px;
  }
`;

const LogoSVG = styled(motion.svg)`
  width: 100%;
  height: 100%;
`;

const LogoPath = styled(motion.path)`
  fill: url(#logoGradient);
`;

const LogoText = styled(motion.text)`
  fill: #fff; 
  font-size: 300px; 
  font-weight: bold; 
@media (max-width: 768px) {
    font-size: 200px; 
  }
`;

const RegisteredMark = styled(motion.text)`
  fill: #fff;
  font-size: 16px;
  font-family: 'Arial, Helvetica, sans-serif';
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NisumLogo = () => {
  const leftPathVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const rightPathVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <LogoContainer>
      <LogoSVG
        viewBox="0 0 1080 254.11"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6e12ff" />
            <stop offset="100%" stopColor="#00ceff" />
          </linearGradient>
        </defs>
        
        <LogoPath
          variants={leftPathVariants}
          d="M187.8 122.12V208.68H79.15V35.56h7.8L187.8 122.12z"
        />
        
        <LogoPath
          variants={rightPathVariants}
          d="M187.8 122.12V35.56h109.9v173.28l-9.06-.16-100.84-86.56z"
        />
        
        <LogoText 
          variants={textVariants} 
          x="350" 
          y="220"
        >
          nisum{" "}
          <tspan dy="-1.25em" dx="-0.9" fontSize="0.3em" fontWeight="bold">®</tspan>
        </LogoText>

      </LogoSVG>
    </LogoContainer>
  );
};
