import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 300px;
  background-image: url('/dale/images/image-hero-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 10px;
`;

export const Logo = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const HamburguerIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  height: 20px;
  justify-content: space-between;
`;
