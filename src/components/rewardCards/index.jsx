import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from '../Arrecadation/styles';
import {
  Section, P, H2, ButtonBack,
} from '../UI';
import { Price, Wrapper } from './styles';

const RewardCard = ({
  product: {
    title, price, description, quantity,
  }, desactivate,
}) => (
  <Section
    style={{
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', textAlign: 'left', gap: '30px', padding: '30px 20px',
    }}
    desactivate={desactivate}
    cardWidth="86%"
  >
    <Wrapper>
      <H2>{title}</H2>
      <Price>{`Pledge $${price} or more`}</Price>
    </Wrapper>
    <P>{description}</P>
    <Wrapper style={{ gap: '20px' }}>
      <H1>
        {quantity }
        <span style={{ fontSize: '12px', color: 'hsl(0, 0%, 48%)' }}>left</span>
      </H1>
      <ButtonBack style={{ width: '175px', backgroundColor: `${desactivate ? 'grey' : 'hsl(176, 50%, 47%)'} ` }}>
        {desactivate ? 'Out of Stock' : 'Select Reward'}
      </ButtonBack>
    </Wrapper>
  </Section>
);

RewardCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  desactivate: PropTypes.bool.isRequired,
};

export default RewardCard;
