import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from '../../styles/Common';




const Footer = styled.footer`
    background-color: ${theme.color.opasityBg};
    padding: 40px 0;
`
const Name = styled.span`
${font({family: "'Josefin Sans', sans-serif", weight: 400, Fmax: 22, Fmin: 16})}
    letter-spacing: 2px;
    color: ${theme.color.primaryBg};
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialItem = styled.li`
    list-style: none;
    display: flex;
`
const SocialLink = styled.a`
    background-color: rgba(242, 242, 238, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px; 

    display: flex; 
    justify-content: center;
    align-items: center; 
    color: ${theme.color.accentColor};
    margin: 0 auto; 

    &:hover {
        color: ${theme.color.primaryBg};
        transform: translateY(-4px); 
    }

use {
    /* transform: scale(0.5) */
}
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5; 
`


export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
}