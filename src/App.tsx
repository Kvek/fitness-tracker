import { useSelector } from "react-redux";

import { Routes } from "components/Routes";

import { globalTheme, globalThemeVariables, styled } from "global-theme";
import { AppState } from "store/rootType";
import { ThemeProvider } from "styled-components";

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  transition: ${({ theme }) =>
    `background-color ${theme.transition.speed} ease-in`};
  height: 100vh;
`;

export const App = () => {
  const { darkTheme, lightTheme } = globalTheme;
  const isDarkTheme = useSelector((state: AppState) => state.theme.isDarkTheme);

  const currentTheme = {
    ...(isDarkTheme ? darkTheme : lightTheme),
    ...globalThemeVariables,
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <MainContainer>
        <Routes />
      </MainContainer>
    </ThemeProvider>
  );
};
