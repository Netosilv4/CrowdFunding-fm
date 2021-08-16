import styled from 'styled-components';

export const DivText = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Border = styled.div`
height: 1px;
width: 80px;
background-color: rgba(0,0,0, 0.2);
`;

export const H1 = styled.h1`
font-size: 30px;
  color: black;
`;

export const P = styled.p`
font-size: smaller;
color: gray;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
text-align: center;
justify-content: space-around;
align-items: center;
`;

export const Progress = styled.div`
margin-top: 10px;
width: 100%;
text-align: center;

progress[value] {
  appearance: none;
  width: 80%;
  ::-webkit-progress-bar {
    border-radius: 5px;
    height: 10px;
    background-color: whitesmoke
  }
  ::-webkit-progress-value {
    border-radius: 5px;
    height: 10px;
    background-color: hsl(176, 50%, 47%);
  }
}`;
