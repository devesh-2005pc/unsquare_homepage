import React from 'react';
import {
  Container,
  Columns,
  Col,
  Title,
  LinkItem,
  BottomBar,
  SocialRow
} from './Footer.styles';

import { LightStyles } from './Footer.styles'; // your light theme block
import { useTheme } from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isLight = theme.mode === 'light';

  // use light styles if light mode is active
  const S = isLight
    ? LightStyles
    : { Container, Columns, Col, Title, LinkItem, BottomBar, SocialRow };

  return (
    <S.Container
      as={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <S.Columns>
        <S.Col>
          <S.Title>Unsquare</S.Title>
          <p>We build bold and modern tech experiences for the future.</p>
        </S.Col>

        <S.Col>
          <S.Title>Quick Links</S.Title>
          <S.LinkItem href="#services">Services</S.LinkItem>
          <S.LinkItem href="#clients">Clients</S.LinkItem>
          <S.LinkItem href="#whyus">Why Us</S.LinkItem>
        </S.Col>

        <S.Col>
          <S.Title>Connect</S.Title>
          <S.SocialRow>
            <a
              href="https://www.instagram.com/unsquare.in"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/unsquare"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </S.SocialRow>
        </S.Col>
      </S.Columns>

      <S.BottomBar>
        © {new Date().getFullYear()} Unsquare. All rights reserved.
      </S.BottomBar>
    </S.Container>
  );
};

export default Footer;
