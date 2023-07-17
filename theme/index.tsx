"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "./themes/colors";
import { EventPlannerThemeProviderProps } from "./types";

const theme = { name: "Event Planner Theme", colors };

export const EventPlannerThemeProvider: React.FunctionComponent<
  EventPlannerThemeProviderProps
> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
