import styled from 'styled-components';

export const Logo = styled.img`
  border-radius: 100px;
  width: 50px;
  transform: translateY(-60px);
  margin-bottom: -60px;
  @media(min-width: 900px){
    transform: translateY(-70px);
    margin-bottom: -70px;
    width: 70px;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media(min-width: 900px){
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  min-width: 20%;
  border: 0;
  border-radius: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 0;
  align-items: center;
  @media(min-width: 900px){
    background-color: lightgray;
    img{
      width: 62px;
    }
  }
`;
