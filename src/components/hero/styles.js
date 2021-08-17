import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 400px;
  background-image: url('/dale/images/image-hero-mobile.jpg'),linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0));
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 20px;
  @media(min-width: 800px) {
    background-image: url('/dale/images/image-hero-desktop.jpg'),linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0));
    background-blend-mode: overlay;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 25px;
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
  @media(min-width: 800px) {
    width: 100%;
    padding: 30px 150px;
  }
`;

export const Li = styled.li`
  color: white;
  font-size: 13px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;
