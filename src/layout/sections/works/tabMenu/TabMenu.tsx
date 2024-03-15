
import React from 'react';
import styled from 'styled-components';
import { LinkTab } from '../../../../components/Link';

type TabMenuPropsType = {
    tabsItems: Array<{status: 'all' | 'landing'| 'react'| 'spa', title: string}>
    changeFilterStatus: (value: 'all' | 'landing'| 'react'| 'spa') => void
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key ={index}>
                        <LinkTab as={'button'} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</LinkTab>
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


