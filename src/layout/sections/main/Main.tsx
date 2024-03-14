import React from 'react';
import photo from '../../../assets/images/avatar.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { S } from './Main_Styles'



export const Main: React.FC = () => {
    return (
        <S.Main>
            <Conteiner>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Volha Filanovich</span></S.Name>
                        <S.MainTitle>Frontend Developer</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Conteiner>
        </S.Main>
    );
};