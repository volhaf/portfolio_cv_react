import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from './../Skill_Styles';


type SkillPropsType ={
    iconId: string
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <S.IconImg>
                        <Icon iconId={props.iconId} viewBox= {"0 0 120 120"}/>
                    </S.IconImg>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
            
        </S.Skill>
            
        
    );
};

