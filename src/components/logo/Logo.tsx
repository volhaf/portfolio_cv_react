import React from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo: React.FC = () => {
    return (
        <LogoIcon href="">
        <Icon iconId={'codeSvg'}/>
        </LogoIcon>
    );
};


const LogoIcon = styled.a`
    color: ${theme.color.fontColorHeder};
`
