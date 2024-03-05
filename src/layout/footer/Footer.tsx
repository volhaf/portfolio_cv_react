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
                            <Icon iconId ={'inst'} height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId ={'linkedin'} height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId ={'github'} height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} />
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
`

const SocialLink = styled.a`
    background-color: ${theme.color.primaryBg};
    opacity: 0.5;
    border-radius: 50%;
    width: 35px;
    height: 35px; 

    display: flex; 
    justify-content: center;
    align-items: center; 

`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5; 
`

