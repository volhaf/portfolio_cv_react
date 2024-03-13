
import React from 'react';
import styled from 'styled-components';
import { LinkTab } from '../../../../components/Link';



export const TabMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item:string, index: number ) => {
                    return <ListItem key ={index}>
                        <LinkTab href="">{item}</LinkTab>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

    ul {
        display: flex;

        justify-content: space-between;
        max-width: 352px; 
        width: 100%; 
        margin: 0 auto 40px; 
    }
`
const ListItem = styled.li`

`


