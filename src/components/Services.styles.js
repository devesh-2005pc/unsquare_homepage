import styled, { keyframes } from 'styled-components';

// Solar pulse animation for icons
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 246, 255, 0.4);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 15px 8px rgba(0, 246, 255, 0);
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
    theme.mode === 'dark' ? '0 0 10px rgba(0, 246, 255, 0.3)' : '0 0 3px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
`;

export const Card = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 2rem;
  border-radius: 18px;
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? '#222' : '#ddd')};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 4px 20px rgba(0, 246, 255, 0.08)'
      : '0 4px 20px rgba(0,0,0,0.08)'};
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 8px 30px rgba(0, 246, 255, 0.2)'
        : '0 8px 30px rgba(0,0,0,0.12)'};
  }
`;

export const Icon = styled.div`
  font-size: 2.6rem;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.accent};
  text-shadow: ${({ theme }) =>
    theme.mode === 'dark' ? '0 0 10px rgba(0, 246, 255, 0.4)' : 'none'};
  animation: ${pulse} 2.5s infinite;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.text};
`;

export const CardDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#ccc' : '#444')};
`;
