import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  height: 300px;
  width: 87%;
  transform: translateY(-50px);
  margin-bottom: -50px;
`;

export const Logo = styled.img`
  border-radius: 100px;
  width: 50px;
  transform: translateY(-40px);
  margin-bottom: -40px;

`;

export const H2 = styled.h2`
width: 70%;
font-size: 22px;
font-weight: 700;
`;

export const P = styled.p`
  color: hsl(0, 0%, 48%);
  width: 95%;
  line-height: 30px;
`;

export const ButtonBack = styled.button`
  width: 70%;
  padding: 18px 10px;
  border-radius: 50px;
  border: 0;
  background-color: hsl(176, 50%, 47%);
  color: white;
  font-weight: 700;
  margin-right: 8px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 20%;
  border: 0;
  border-radius: 100px;
`;
