import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`0%{opacity:0}100%{opacity:1}`;
const float1 = keyframes`0%{transform:translate(-40px,-20px)}100%{transform:translate(40px,20px)}`;
const float2 = keyframes`0%{transform:translate(50px,30px)}100%{transform:translate(-50px,-30px)}`;
const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const PageContainer = styled.div`
  position: relative;
  padding: 6rem 2rem 3rem;
  background: ${({ theme }) => theme.pageBg};
  overflow: hidden;
`;

export const Blob1 = styled.div`
  position: absolute;
  width: 360px; height: 360px;
  background: #00f6ff;
  opacity: 0.1;
  border-radius: 50%;
  top: 10%; left: -10%;
  filter: blur(120px);
  animation: ${float1} 18s ease-in-out infinite alternate;
`;

export const Blob2 = styled.div`
  position: absolute;
  width: 500px; height: 500px;
  background: #ff6ec4;
  opacity: 0.06;
  border-radius: 50%;
  bottom: 0; right: -12%;
  filter: blur(140px);
  animation: ${float2} 20s ease-in-out infinite alternate;
`;

export const HeroBanner = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;

  ${({ theme }) =>
    theme.mode === 'light'
      ? `
    background: linear-gradient(90deg, #00f6ff, #00b2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
      : `
    color: ${theme.text};
  `}
`;


export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.subtext};
  max-width: 700px;
  margin: 0 auto;
`;

export const TestiGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const TestiCard = styled.div`
  background: ${({ theme }) => theme.cardGlass};
  backdrop-filter: blur(16px);
  border-radius: 24px;
  padding: 2.2rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transform: scale(1);

  &:hover {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  }

  .quote {
    font-family: 'Georgia', serif;
    font-size: 1.15rem;
    line-height: 1.6;
    font-style: italic;
    color: ${({ theme }) => theme.text};
  }

  .who {
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};

    span {
      font-weight: normal;
      color: ${({ theme }) => theme.subtext};
    }
  }
`;

export const ExpandBtn = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  text-align: left;
  background-image: linear-gradient(90deg, #00f6ff, #00b2ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

export const ExpandedStory = styled.div`
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.subtext};
`;

export const CTAFooter = styled.div`
  margin-top: 6rem;
  text-align: center;
  animation: ${fadeIn} 1s ease;

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    color: #000;
    background: linear-gradient(90deg, #00f6ff, #00b2ff);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 14px rgba(0, 255, 255, 0.4);
    }
  }
`;
