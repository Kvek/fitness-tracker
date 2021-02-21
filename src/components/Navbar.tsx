import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Brightness2Outlined, WbSunny } from "@material-ui/icons";

import { styled } from "global-theme";
import { setDarkTheme } from "store/theme/actions";

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 0 15px rgb(0 0 0 / 40%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 15px;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    transition: ${({ theme }) => `color ${theme.transition.speed} ease-in`};
  }
`;

const Navbar = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = useState(true);
  const dispatch = useDispatch();

  const toggleTheme = () => setToggleDarkTheme((prevState) => !prevState);

  useEffect(() => {
    dispatch(setDarkTheme(toggleDarkTheme));
  }, [toggleDarkTheme]);

  return (
    <NavBarContainer>
      {toggleDarkTheme ? (
        <WbSunny onClick={toggleTheme} />
      ) : (
        <Brightness2Outlined
          onClick={toggleTheme}
          style={{ transform: "rotate(150deg)" }}
        />
      )}
    </NavBarContainer>
  );
};

export default Navbar;
