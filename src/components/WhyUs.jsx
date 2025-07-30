import React from 'react';
import * as Styled from './WhyUs.styles';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaLightbulb />,
    title: 'Innovative Approach',
    desc: 'We blend creativity with cutting-edge tech to solve real-world problems.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Reliable',
    desc: 'We prioritize robust security and trustworthy digital infrastructure.'
  },
  {
    icon: <FaClock />,
    title: 'Timely Delivery',
    desc: 'We respect your time. Projects are always delivered on or before deadline.'
  },
  {
    icon: <FaAward />,
    title: 'Award-Winning Team',
    desc: 'Our elite engineers and designers are recognized for excellence.'
  }
];

const WhyUs = () => {
  const theme = useTheme();
  const isLight = theme.mode === 'light';

  const S = isLight ? Styled.LightStyles : Styled;

  return (
    <S.Section id="whyus">
      <S.Title>Why Choose Us</S.Title>
      <S.Grid>
        {reasons.map((r, index) => (
          <S.Item
            key={index}
            as={motion.div}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <S.IconWrap>{r.icon}</S.IconWrap>
            <S.ItemTitle>{r.title}</S.ItemTitle>
            <S.ItemText>{r.desc}</S.ItemText>
          </S.Item>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default WhyUs;
