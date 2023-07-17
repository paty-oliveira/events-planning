"use client";

import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${poppins.style.fontFamily};
        margin: auto;
        background-color: ${(props) => props.theme.colors["blue"]["000"]};
    }
`