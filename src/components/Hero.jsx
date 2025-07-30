import React from 'react';
import {
  Container,
  Headline,
  Subtext,
  CTA,
  Overlay,
  Blob,
  ScrollHint,
  ImageWrapper,
  ContentWrap
} from './Hero.styles';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import heroImage from '../assets/hero-image.png'; // Your illustration image

const Hero = () => {
  const { theme } = useTheme();

  return (
    <Container id="hero" theme={theme}>
      <Overlay />
      <Blob />

      <ContentWrap>
        <ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img src={heroImage} alt="Tech Illustration" />
        </ImageWrapper>

        <div className="text-block">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Headline theme={theme}>
              If it's tech, no one does it better than <span>Unsquare.</span>
            </Headline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Subtext theme={theme}>
              Bold. Modern. Inspiring. Let’s build the future together.
            </Subtext>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <CTA href="#services" theme={theme}>Explore Services</CTA>
          </motion.div>
        </div>
      </ContentWrap>

      <ScrollHint href="#services">
        <FaChevronDown />
      </ScrollHint>
    </Container>
  );
};

export default Hero;
