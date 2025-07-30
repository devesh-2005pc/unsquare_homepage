import React from 'react';
import {
  Section,
  Title,
  ContactGrid,
  Card,
  IconWrap,
  Label,
  InfoLink,
} from './Contact.styles';

import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// 🌞 Optional light theme styles (from LightStyles inside Contact.styles.js)
import { LightStyles } from './Contact.styles';

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    info: 'info@unsquare.in',
    link: 'mailto:info@unsquare.in',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    info: '+91 7738550083',
    link: 'tel:+917738550083',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    info: 'Thane, India',
    link: 'https://www.google.com/maps/place/Thane,+Maharashtra',
  },
];

const Contact = () => {
  const theme = useTheme();
  const isLight = theme.mode === 'light';
  const S = isLight ? LightStyles : { Section, Title, ContactGrid, Card, IconWrap, Label, InfoLink };

  return (
    <S.Section id="contact">
      <S.Title>Get in Touch</S.Title>
      <S.ContactGrid>
        {contactItems.map((item, index) => (
          <S.Card
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
          >
            <S.IconWrap>{item.icon}</S.IconWrap>
            <S.Label>{item.label}</S.Label>
            <S.InfoLink href={item.link} target="_blank" rel="noreferrer">
              {item.info}
            </S.InfoLink>
          </S.Card>
        ))}
      </S.ContactGrid>
    </S.Section>
  );
};

export default Contact;
