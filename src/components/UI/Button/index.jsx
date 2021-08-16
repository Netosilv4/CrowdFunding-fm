import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

function Button({ value, primary }) {
  return (
    <StyledButton primary={primary} type="button">
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  value: PropTypes.string,
}.isRequired;

export default Button;
