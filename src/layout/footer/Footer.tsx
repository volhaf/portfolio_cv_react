import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles';


const socialItemData = [
    {iconId: 'inst'},
    {iconId: 'linkedin'},
    {iconId: 'github'},
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
            <S.Name>@volha.dev</S.Name>
                <S.SocialList>

                    {socialItemData.map((s, index)=> {
                        return  <S.SocialItem key ={index}>
                                    <S.SocialLink>
                                        <Icon iconId ={s.iconId} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} />
                                    </S.SocialLink>
                                </S.SocialItem>
                    })}
                    
                </S.SocialList>
            <S.Copyright>© 2024 Volha Filanovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

