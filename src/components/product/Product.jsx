import React from 'react';
import PropTypes from 'prop-types';
import {
  Logo, Div, Button,
} from './styles';
import {
  Section, P, ButtonBack, H2,
} from '../UI';

const Product = ({ setShow }) => (
  <Section style={{ height: '300px', transform: 'translateY(-100px)', marginBottom: '-100px' }}>
    <Logo src="dale/images/logo-mastercraft.svg" alt="logo mastercraft" />
    <H2>
      Mastercraft Bamboo
      Monitor Riser
    </H2>
    <P>A beautifully handcrafted monitor stand to reduce neck and eye strain.</P>
    <Div>
      <ButtonBack onClick={() => setShow('flex')} type="button">Back this project</ButtonBack>
      <Button type="button">
        <img src="dale/images/icon-bookmark.svg" alt="bookmark icon" />
        {window.innerWidth > 900 ? <P style={{ fontWeight: '700', width: '100%' }}>Bookmark</P> : ''}
      </Button>
    </Div>
  </Section>
);

Product.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Product;
