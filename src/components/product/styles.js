import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  height: 35vh;
`;

export const Logo = styled.img`
  border-radius: 100px;
  width: 50px;
`;

export const H2 = styled.h2`
width: 70%;
font-size: 20px;
font-weight: 700;
`;

export const P = styled.p`
  color: hsl(0, 0%, 48%);
`;

export const ButtonBack = styled.button`
  width: 45vw;
  padding: 18px;
  border-radius: 50px;
  border: 0;
  background-color: hsl(176, 50%, 47%);
  color: white;
  font-weight: 700;
  margin-right: 8px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 100px;
`;
