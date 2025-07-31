import React from 'react';
import {
  PageContainer, HeroBanner, Title, Subtitle, TestiGrid, TestiCard,
  ExpandBtn, ExpandedStory, CTAFooter, Blob1, Blob2
} from './Voices.styles';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Static testimonial data
const clients = [
  {
    name: 'CA Aditya Goenka',
    title: 'Cofounder, Console Gaming',
    quote: '…streamlined our daily operations at both staff and owner levels. The efficiency gains …',
    full: 'Before partnering with Unsquare, we at Console Gaming were juggling multiple softwares for our card processing and billing. Unsquare developed a comprehensive, integrated mobile application and billing software that has streamlined our daily operations at both staff and owner levels. The efficiency gains and insightful analytics have been remarkable. We’re so pleased with the solution that we’re already planning an upgrade with Unsquare.',
  },
  {
    name: 'Sayyam Khurmi',
    title: 'Founder, Against Odds',
    quote: '…their ability to translate our ideas into a functional and visually appealing online presence.',
    full: 'Unsquare delivered an outstanding website for Against Odds, and a key part of that success was the expertise of Akshat. His technical insights and contributions were invaluable in creating a platform that truly captures our brand. I was particularly impressed with his ability to translate our ideas into a functional and visually appealing online presence. Highly recommended!',
  },
  {
    name: 'Priya Mehta',
    title: 'Founder, Roaders',
    quote: '…dual‑app solution has been fundamental to our operations …',
    full: 'Roaders launched with a significant advantage thanks to Unsquare. They developed dedicated mobile applications for both our drivers and our customers, ensuring a streamlined experience for everyone. This dual‑app solution has been fundamental to our operations, and we are grateful for Unsquare’s expertise in bringing this vision to life.',
  },
  {
    name: 'Karan Melwani',
    title: 'Founder & CEO, Yahoom',
    quote: '…custom‑built site that loads incredibly quickly …',
    full: 'I wanted Yahoom to have a website that was fast and unique, not just another standard online store. Unsquare delivered a custom‑built site that loads incredibly quickly, which is crucial for a good user experience. Their team really understood my vision for the brand and created a platform that reflects it perfectly. Very happy with their work and the impact it’s having.',
  },
];

const Voices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageContainer id="voices">
      <Blob1 /><Blob2 />
      <HeroBanner as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Title>Voices of Success</Title>
        <Subtitle>What our clients say—real impact, real transformations.</Subtitle>
      </HeroBanner>

      <TestiGrid>
        {clients.map((c, i) => (
          <TestiCard key={i} as={motion.div}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
          >
            <p className="quote">“{c.quote}”</p>
            <p className="who">— {c.name}, <span>{c.title}</span></p>
            <ExpandBtn onClick={() => setOpenIndex(i)}>Read More</ExpandBtn>
            {openIndex === i && <ExpandedStory>{c.full}</ExpandedStory>}
          </TestiCard>
        ))}
      </TestiGrid>

      <CTAFooter>
        <h2>Want your story here?</h2>
        <a href="#contact">Let's Collaborate →</a>
      </CTAFooter>
    </PageContainer>
  );
};

export default Voices;
