import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>@volha.dev</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId ={'inst'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId ={'linkedin'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId ={'github'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            <Copyright>© 2024 Volha Filanovich, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.color.opasityBg};
    padding: 40px 0;
`

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 22px;
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



