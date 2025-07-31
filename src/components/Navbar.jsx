import React from 'react';
import { Nav, Logo, Menu, ThemeToggle, NavGroup } from './Navbar.styles';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Nav>
      <Logo>Unsquare</Logo>

      <NavGroup>
        <Menu>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#voices">Success Stories</a>

          <a href="#whyus">Why Us</a>
          <a href="#contact">Contact</a>
        </Menu>

        <ThemeToggle onClick={toggleTheme} isDark={isDark}>
          <div className="icon">
            {isDark ? <FaMoon size={14} /> : <FaSun size={14} />}
          </div>
        </ThemeToggle>
      </NavGroup>
    </Nav>
  );
};

export default Navbar;
