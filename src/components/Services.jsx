import React from 'react';
import {
  Section,
  Title,
  Grid,
  Card,
  Icon,
  CardTitle,
  CardDesc
} from './Services.styles';

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaPalette } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Full Stack Development',
    desc: 'We craft scalable, fast, and secure applications for web and mobile.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'UI/UX Design',
    desc: 'Modern, intuitive designs that convert and delight.'
  },
  {
    icon: <FaRocket />,
    title: 'Tech Consulting',
    desc: 'Strategic guidance to build, scale, and succeed in tech.'
  },
  {
    icon: <FaPalette />,
    title: 'Brand Identity',
    desc: 'Unique branding that speaks your company’s tech vision.'
  }
];

const Services = () => {
  return (
    <Section id="services">
      <Title>Our Services</Title>
      <Grid>
        {services.map((service, index) => (
          <Card
            key={index}
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Icon>{service.icon}</Icon>
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
