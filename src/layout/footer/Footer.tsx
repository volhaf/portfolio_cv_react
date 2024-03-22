import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles';


const socialItemData = [
    {iconId: 'inst', href: 'https://www.instagram.com/volha.dev/'},
    {iconId: 'linkedin', href: 'www.linkedin.com/in/volha-filanovich-355a562b1'},
    {iconId: 'github', href: 'https://github.com/volhaf'},
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
            <S.Name>@volha.dev</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index)=> {
                        return  <S.SocialItem key ={index}>
                                    <S.SocialLink href={s.href} target="_blank">
                                        <Icon iconId ={s.iconId} height={'21'} width={'21'} viewBox={'0 0 21 21'} />
                                    </S.SocialLink>
                                </S.SocialItem>
                    })}
                </S.SocialList>
            <S.Copyright>© 2024 Volha Filanovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

