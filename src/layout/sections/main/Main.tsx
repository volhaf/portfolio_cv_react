import React from 'react';
import photo from '../../../assets/images/avatar.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Conteiner>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Volha Filanovich</span></S.Name>
                        <S.MainTitle>
                            <p>Frontend Developer</p>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Web Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}/>
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Conteiner>
        </S.Main>
    );
};
