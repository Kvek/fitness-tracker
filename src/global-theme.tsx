import baseStyled, { ThemedStyledInterface } from "styled-components";

const lightTheme = {
  bgColor: "#f5f5f5",
  color: "#111927",
};

const darkTheme = {
  bgColor: "#111927",
  color: "#f5f5f5",
};

export const globalTheme = {
  darkTheme,
  lightTheme,
};

export const globalThemeVariables = {
  transition: {
    speed: ".15s",
  },
};

export type GlobalThemeType = {
  bgColor: string;
  color: string;
  transition: typeof globalThemeVariables.transition;
};

export const styled = baseStyled as ThemedStyledInterface<GlobalThemeType>;
