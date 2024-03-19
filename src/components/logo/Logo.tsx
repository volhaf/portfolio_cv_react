import React from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { animateScroll as scroll} from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <LogoIcon onClick={() => {scroll.scrollToTop()}}>
        <Icon iconId={'codeSvg'}/>
        </LogoIcon>
    );
};


const LogoIcon = styled.a`
    color: ${theme.color.fontColorHeder};
`
