import React from 'react';
import {
  Header, Logo, HamburguerIcon, Menu,
} from './styles';

const Hero = () => (
  <Header>
    <Menu>
      <Logo src="/dale/images/logo.svg" />
      <HamburguerIcon src="/dale/images/icon-hamburger.svg" />
    </Menu>
  </Header>
);

export default Hero;
