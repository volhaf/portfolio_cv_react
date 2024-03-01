
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

// type MenuPropsType = {
//     menuItems: Array<string>
// }


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHederMenu>
            <ul>
                {props.menuItems.map((item:string, index: number ) => {
                    return <ListItem key ={index}>
                        <Link href=''>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHederMenu>
    );
};

const StyledHederMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const ListItem = styled.li`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #fff; 
   
`

const Link = styled.a`
    
`