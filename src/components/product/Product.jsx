import React from 'react';
import {
  Logo, Section, H2, P, ButtonBack, Div, Button,
} from './styles';

const Product = () => (
  <Section>
    <Logo src="dale/images/logo-mastercraft.svg" alt="logo mastercraft" />
    <H2>
      Mastercraft Bamboo
      <br />
      Monitor Riser
    </H2>
    <P>A beautifully handcrafted monitor stand to reduce neck and eye strain.</P>
    <Div>
      <ButtonBack type="button">Back this project</ButtonBack>
      <Button type="button"><img src="dale/images/icon-bookmark.svg" alt="bookmark icon" /></Button>
    </Div>
  </Section>
);

export default Product;
