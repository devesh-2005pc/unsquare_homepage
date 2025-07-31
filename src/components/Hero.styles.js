import styled, { keyframes } from 'styled-components';

// Keyframes
const floatBlob = keyframes`
  0% { transform: translate(-30px, -30px); }
  100% { transform: translate(30px, 20px); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const slideDownFadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled Components
export const Container = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.heroBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  padding: 0 2rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.04;
  z-index: 0;
`;

export const Blob = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle at 30% 30%, #00f6ff, #3fafff);
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(130px);
  animation: ${floatBlob} 8s ease-in-out infinite alternate;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const BackgroundText = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  font-size: 10rem;
  font-weight: 900;
  letter-spacing: 10px;
  color: rgba(255, 255, 255, 0.03);
  z-index: 0;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  .text-block {
    flex: 1;
    min-width: 320px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
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
  opacity: 0;
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.3s;

  span {
    background: linear-gradient(135deg, #00f6ff, #3fafff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(0, 246, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtext = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.subtext};
  opacity: 0;
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAWrap = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CTA = styled.a`
  display: inline-block;
  background: ${({ secondary }) =>
    secondary ? 'transparent' : 'linear-gradient(135deg, #00f6ff, #3fafff)'};
  border: ${({ secondary }) =>
    secondary ? '2px solid #3fafff' : 'none'};
  color: ${({ secondary }) => (secondary ? '#3fafff' : '#000')};
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.4s ease;
  opacity: 0;
  animation: ${slideDownFadeIn} 1s ease forwards;
  animation-delay: 0.7s;

  &:hover {
    background: ${({ secondary }) =>
      secondary ? '#3fafff' : '#ffffff'};
    color: ${({ secondary }) => (secondary ? '#fff' : '#111')};
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
