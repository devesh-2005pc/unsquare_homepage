import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components';
import { ThemeProviderCustom, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const AppInner = () => {
  const { isDark } = useTheme();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

const App = () => (
  <ThemeProviderCustom>
    <AppInner />
  </ThemeProviderCustom>
);

export default App;
