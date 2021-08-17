import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import RewardCard from '../rewardCards';
import products from '../../helper/rewardCards/texts';
import { ModelSection, Div } from './styles';

const ProductModal = () => {
  const [show, setShow] = useState('flex');
  return (
    <ModelSection show={show} style={{ gap: '30px', textAlign: 'left', alignItems: 'left' }}>
      <IoMdClose onClick={() => setShow('none')} size="50px" color="black" cursor="pointer" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }} />
      <Div>
        {
    products.map((e) => <RewardCard product={e} desactivate={e.quantity === 0} />)
  }
      </Div>
    </ModelSection>
  );
};
export default ProductModal;
