import React from 'react';
import { IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';
import RewardCard from '../rewardCards';
import products from '../../helper/rewardCards/texts';
import { ModelSection, Div, ModalHead } from './styles';
import { H2, P } from '../UI';

const ProductModal = ({ show, setShow }) => (
  <ModelSection show={show} style={{ gap: '30px', textAlign: 'left', alignItems: 'left' }}>
    <Div>
      <ModalHead>
        <H2>
          Back this project
        </H2>
        <IoMdClose onClick={() => setShow('none')} size="50px" color="rgba(0,0,0,0.6)" cursor="pointer" style={{ backgroundColor: '#c2c2c27e', borderRadius: '50%' }} />
      </ModalHead>
      <P>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
      </P>
      {
    products.map((e) => <RewardCard product={e} desactivate={e.quantity === 0} />)
  }
    </Div>
  </ModelSection>
);

ProductModal.propTypes = {
  show: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ProductModal;
