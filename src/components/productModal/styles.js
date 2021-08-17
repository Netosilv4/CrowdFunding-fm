import styled from 'styled-components';

export const ModelSection = styled.section`
  display: ${(props) => props.show};
  flex-direction: column;
  align-items: center;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  height: 550%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  padding: 200px 0;
`;

export const Div = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  background-color: white;
  padding: 50px 50px;
  width: 90%;
  @media(min-width: 900px) {
    width: 70%;
  }
  box-shadow: 1px 1px 5px black;
`;
