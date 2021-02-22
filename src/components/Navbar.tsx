import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ArrowDropDown,
  Brightness2Outlined,
  WbSunny,
} from "@material-ui/icons";

import { NavbarIcon } from "./NavbarIcon";
import { NavbarMenu } from "./NavbarMenu";
import { styled } from "global-theme";
import { setDarkTheme } from "store/theme/actions";

const NavBarContainer = styled.div`
  height: 50px;
  box-shadow: 0 0 15px rgb(0 0 0 / 40%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 15px;
  position: relative;
`;

const Navbar = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleTheme = () => setToggleDarkTheme((prevState) => !prevState);

  useEffect(() => {
    dispatch(setDarkTheme(toggleDarkTheme));
  }, [toggleDarkTheme]);

  const iconToggle = toggleDarkTheme ? (
    <WbSunny />
  ) : (
    <Brightness2Outlined style={{ transform: "rotate(150deg)" }} />
  );

  return (
    <NavBarContainer>
      <NavbarIcon onClick={toggleTheme} icon={iconToggle} />
      <NavbarIcon
        icon={<ArrowDropDown />}
        onIconHover={() => setShowMenu(true)}
        onIconLeave={() => setShowMenu(false)}
        open={showMenu}
      >
        <NavbarMenu />
      </NavbarIcon>
    </NavBarContainer>
  );
};

export default Navbar;
