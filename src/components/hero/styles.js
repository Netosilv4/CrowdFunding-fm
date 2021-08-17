import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 400px;
  background-image: url('/dale/images/image-hero-mobile.jpg'),linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0));
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 10px;
  @media(min-width: 800px) {
    background-image: url('/dale/images/image-hero-desktop.jpg'),linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0));
    background-blend-mode: overlay;
  }
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
