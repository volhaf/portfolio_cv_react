import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const LinkTab = styled.a<{active?: boolean}>`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 10px; 

    position: relative;
    z-index: 0; 

    &:hover {
        &::before{
            height: 10px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.color.accentColor};

        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0; 
        z-index: -1;



        ${props => props.active && css<{active?: boolean}>`
        height: 10px;

        `}
    }
`