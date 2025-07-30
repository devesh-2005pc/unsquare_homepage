import React from 'react';
import {
  Section,
  Title,
  LogoGrid,
  LogoBox
} from './Clients.styles';

import { motion } from 'framer-motion';

const logos = [
  '/logos/google.png',
  '/logos/meta.png',
  '/logos/netflix.png',
  '/logos/microsoft.png',
  '/logos/tesla.png',
  '/logos/appple.png'
];

const Clients = () => {
  return (
    <Section id="clients">
      <Title>Our Clients</Title>
      <LogoGrid>
        {logos.map((src, index) => (
          <LogoBox
            key={index}
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={src} alt={`client-${index}`} />
          </LogoBox>
        ))}
      </LogoGrid>
    </Section>
  );
};

export default Clients;
