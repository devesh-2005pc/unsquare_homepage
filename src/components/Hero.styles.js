import styled, { keyframes } from 'styled-components';

// Floating background blob animation
const floatBlob = keyframes`
  0% {
    transform: translate(-30px, -30px);
  }
  100% {
    transform: translate(30px, 20px);
  }
`;

// Scroll bounce animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

// New: Slide-down with fade-in animation
const slideDownFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.heroBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  padding: 0 2rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.03;
  z-index: 0;
`;

export const Blob = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle at 30% 30%, #00f6ff, #3fafff);
  opacity: 0.12;
  border-radius: 50%;
  filter: blur(120px);
  animation: ${floatBlob} 8s ease-in-out infinite alternate;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  z-index: 2;
  max-width: 1200px;
  padding: 1rem;
  width: 100%;

  .text-block {
    flex: 1;
    min-width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 600px;
    z-index: 2;
    animation: ${slideDownFadeIn} 1s ease forwards;
    animation-delay: 0.2s;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Headline = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.3;
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  span {
    background: linear-gradient(135deg, #00f6ff, #3fafff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 25px rgba(0, 246, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Subtext = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.subtext};
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTA = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #00f6ff, #3fafff);
  color: #000;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 0 20px rgba(0, 246, 255, 0.2);
  transition: all 0.4s ease;
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;

  &:hover {
    background: #ffffff;
    color: #111;
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(0, 246, 255, 0.4);
  }
`;

export const ScrollHint = styled.a`
  position: absolute;
  bottom: 30px;
  color: #00f6ff;
  font-size: 1.2rem;
  animation: ${bounce} 2s infinite;
  z-index: 3;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
