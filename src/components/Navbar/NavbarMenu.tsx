import styled from "styled-components";

const MenuContainer = styled.nav`
  display: flex;
  width: 200px;
  height: 100%;
  border-radius: 5px;
  min-height: 200px;
  position: absolute;
  bottom: 0;
  top: 58px;
  transform: translateX(-100%);
  background-color: ${({ theme }) => theme.iconBgColor};
  box-shadow: 0 0 15px rgb(0 0 0 / 20%);
`;

export const NavbarMenu = () => <MenuContainer />;
