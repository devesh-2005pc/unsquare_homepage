import styled from 'styled-components';

export const Nav = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? '#0a0a0a' // Solid dark fallback
      : theme.navBackground};
  backdrop-filter: ${({ theme }) =>
    theme.mode === 'dark' ? 'none' : 'blur(10px)'};
  -webkit-backdrop-filter: ${({ theme }) =>
    theme.mode === 'dark' ? 'none' : 'blur(10px)'};
  padding: 1.4rem 2.8rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.navShadow};
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
`;


export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.accent};
  text-shadow: ${({ theme }) =>
    theme.mode === 'dark' ? '0 0 8px rgba(0, 246, 255, 0.6)' : 'none'};
  transition: all 0.3s ease;
  cursor: default;
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: ${({ theme }) => theme.accentGradient};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.accent};
      text-shadow: ${({ theme }) =>
        theme.mode === 'dark'
          ? '0 0 6px rgba(0, 246, 255, 0.5)'
          : '0 0 2px rgba(0, 0, 0, 0.1)'};
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const ThemeToggle = styled.div`
  width: 52px;
  height: 26px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)' : '#ddd'};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  padding: 4px;
  transition: background 0.3s;

  .icon {
    background: ${({ theme }) => (theme.mode === 'dark' ? '#00f6ff' : '#ffa500')};
    color: ${({ theme }) => (theme.mode === 'dark' ? '#000' : '#fff')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: ${({ isDark }) => (isDark ? '4px' : '26px')};
    transition: left 0.3s ease, background 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark' ? '0 0 6px rgba(0, 246, 255, 0.4)' : 'none'};
  }
`;
