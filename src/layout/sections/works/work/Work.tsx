import React from 'react';
import { LinkTab } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/button/Button';
import {S} from './../Works_Styles';


type WorkPropsType ={
    title: string
    text: string
    src: string
}


export const Work: React.FC<WorkPropsType>= (props:WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src ={props.src} alt="" />
                <Button>view project</Button>
            </S.ImageWrapper>
            
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <LinkTab href ={"#"}>demo</LinkTab>
                <LinkTab href ={"#"}>code</LinkTab>
            </S.Description>
            
        </S.Work>
    );
};
