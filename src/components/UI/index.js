import styled from 'styled-components';

export const Section = styled.section`
  opacity: ${(props) => (props.desactivate ? 0.4 : 1)};
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  width: 87%;
  padding: 20px 10px;
  @media(min-width: 900px) {
    width: 80%;
    :nth-child( n + 4) {
      width: 87%;
    }
    justify-content: space-between;
    padding: 40px 40px;
    :nth-child(4) {
      margin-top: 40px;
    }
  }
`;

export const H2 = styled.h2`
width: 100%;
font-size: 22px;
font-weight: 700;
@media(min-width: 900px) {
font-size: 30px;
}
`;

export const P = styled.p`
  color: hsl(0, 0%, 48%);
  line-height: 30px;
  @media(min-width: 900px) {
  font-size: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonBack = styled.button`
  padding: 18px 10px;
  border-radius: 50px;
  border: 0;
  background-color: hsl(176, 50%, 47%);
  color: white;
  font-weight: 700;
  width: 200px;
  margin-right: 8px;
  :hover{
    cursor: pointer;
    opacity: 0.8;
  }
  @media(min-width: 800px){
    width: 240px;
    padding: 22px 10px;
  }
`;
