import styled, { keyframes } from 'styled-components';

// Pulse animation for icon/logo (if used)
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 246, 255, 0.4);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 20px 10px rgba(0, 246, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 246, 255, 0);
  }
`;

export const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 3rem;
  text-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0 10px rgba(0, 246, 255, 0.3)'
      : '0 2px 6px rgba(0, 0, 0, 0.08)'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: auto;
`;

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(25, 25, 25, 0.4)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 2rem 1.5rem;
  border-radius: 16px;
  backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? '#222' : '#d4e7f5')};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 4px 20px rgba(0, 246, 255, 0.1)'
      : '0 6px 24px rgba(0, 0, 0, 0.06)'};
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 8px 30px rgba(0, 246, 255, 0.2)'
        : '0 10px 30px rgba(0, 123, 255, 0.15)'};
  }

  &::before {
    content: '';
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(circle, rgba(0,246,255,0.06) 0%, transparent 80%)'
        : 'radial-gradient(circle, rgba(0,123,255,0.05) 0%, transparent 80%)'};
    pointer-events: none;
    z-index: 0;
  }
`;

export const Icon = styled.div`
  font-size: 2.6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
  text-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0 8px rgba(0, 246, 255, 0.4)'
      : '0 2px 4px rgba(0, 123, 255, 0.2)'};
  animation: ${pulse} 3s infinite;
  z-index: 1;
  position: relative;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  z-index: 1;
  position: relative;
`;

export const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#ccc' : '#333')};
  z-index: 1;
  position: relative;
`;
export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const LogoBox = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'};
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0 10px rgba(0, 246, 255, 0.08)'
      : '0 0 10px rgba(0, 0, 0, 0.05)'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }

  img {
    max-width: 80px;
    max-height: 40px;
    object-fit: contain;
    filter: ${({ theme }) =>
      theme.mode === 'dark' ? 'brightness(1.2)' : 'none'};
  }
`;

