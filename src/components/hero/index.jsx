import React from 'react';
import {
  Header, Logo, HamburguerIcon, Menu, Li, Ul,
} from './styles';

const Hero = () => (
  <Header>
    <Menu>
      <Logo src="/dale/images/logo.svg" />
      {window.innerWidth < 900 ? <HamburguerIcon src="/dale/images/icon-hamburger.svg" />
        : (
          <Ul>
            <Li>About</Li>
            <Li>Discover</Li>
            <Li>Get Started</Li>
          </Ul>
        )}
    </Menu>
  </Header>
);

export default Hero;
