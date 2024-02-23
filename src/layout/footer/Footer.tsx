import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>VF Company</Name>
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
            <Copyright>© 2024 VF Company, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: #f8d7af;
`

const Name = styled.span`
    
`

const SocialList = styled.ul`
    display: flex;
`
const SocialItem = styled.li`
    list-style: none;
`

const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`

