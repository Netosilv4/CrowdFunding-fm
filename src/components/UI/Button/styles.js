import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? 'hsl(176, 72%, 28%)' : 'hsl(0, 0%, 0%)')};
  color: ${(props) => (props.primary ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 48%)')};
  border-radius: 10px;
`;

export default StyledButton;
