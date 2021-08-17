import styled from 'styled-components';

export const Price = styled.p`
  width: 100%;
  color: hsl(176, 50%, 47%);
  font-size: 16px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
  @media(min-width: 900px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
      text-align: right;
    }
  }
`;
