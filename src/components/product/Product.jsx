import React from 'react';
import {
  Logo, Div, Button,
} from './styles';
import {
  Section, P, ButtonBack, H2,
} from '../UI';

const Product = () => (
  <Section style={{ height: '300px', transform: 'translateY(-50px)', marginBottom: '-50px' }}>
    <Logo src="dale/images/logo-mastercraft.svg" alt="logo mastercraft" />
    <H2>
      Mastercraft Bamboo
      <br />
      Monitor Riser
    </H2>
    <P>A beautifully handcrafted monitor stand to reduce neck and eye strain.</P>
    <Div>
      <ButtonBack style={{ width: '70%' }} type="button">Back this project</ButtonBack>
      <Button type="button"><img src="dale/images/icon-bookmark.svg" alt="bookmark icon" /></Button>
    </Div>
  </Section>
);

export default Product;
