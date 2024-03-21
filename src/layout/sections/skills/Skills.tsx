import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Conteiner } from '../../../components/Conteiner';
import { S } from './Skill_Styles';
import { Fade } from "react-awesome-reveal"; 


const skillData = [
    {
        iconId: 'html',
        title: 'html5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },
    {
        iconId: 'css',
        title: 'css',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },
    {
        iconId: 'js',
        title: 'JavaScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },
    {
        iconId: 'git',
        title: 'Git',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },
    {
        iconId: 'ts',
        title: 'TypeScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },
    {
        iconId: 'react',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Conteiner>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index)=> {
                            return <Skill iconId={s.iconId} key={index}
                                            title={s.title}
                                            description= {s.description}/>
                        })} 
                    </Fade>
                </FlexWrapper>
            </Conteiner>
            
        </S.Skills>
    );
};




