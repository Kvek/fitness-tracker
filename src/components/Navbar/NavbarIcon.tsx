import { ReactElement } from "react";
import { useSelector } from "react-redux";

import { styled } from "global-theme";
import { AppState } from "store/rootType";

type IconContainerType = {
  isDarkTheme: boolean;
};

const NavbarIconContainer = styled.div`
  margin: 0 5px;
  width: 50px;
`;

const NavbarIconInnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`;

const IconContainer = styled.span<IconContainerType>`
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: filter 0.15s ease-in;
  background-color: ${({ theme }) => theme.iconBgColor};
  filter: brightness(1.25);

  &:hover {
    background-color: ${({ theme }) => theme.iconBgColor};
    filter: ${({ isDarkTheme }) =>
      isDarkTheme ? "brightness(1.7)" : "brightness(1.25)"};
  }

  svg {
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.iconColor};
    transition: ${({ theme }) => `color ${theme.transition.speed} ease-in`};
  }
`;

export const NavbarIcon = ({
  icon,
  open,
  children,
  onClick,
  onIconHover,
  onIconLeave,
}: {
  children?: any;
  open?: boolean;
  icon: ReactElement;
  onClick?: () => void;
  onIconHover?: () => void;
  onIconLeave?: () => void;
}) => {
  const isDarkTheme = useSelector((state: AppState) => state.theme.isDarkTheme);

  return (
    <NavbarIconContainer onMouseEnter={onIconHover} onMouseLeave={onIconLeave}>
      <NavbarIconInnerContainer>
        <IconContainer isDarkTheme={isDarkTheme} onClick={onClick}>
          {icon}
        </IconContainer>
        <span>{open && children}</span>
      </NavbarIconInnerContainer>
    </NavbarIconContainer>
  );
};
