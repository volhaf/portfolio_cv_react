import styled from 'styled-components';
import { theme } from '../../../styles/Theme';


const Skills = styled.section``

const Skill = styled.div`
    width: 380px;
    flex-grow: 1;
    padding: 45px 20px 55px;
    
    @media ${theme.media.large} {
        width: 350px;
    }
    @media ${theme.media.mobile} {
        width: 330px;
        padding: 60px 0px 40px;
    }

`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase; 

`

const SkillText = styled.p`
    text-align: center;
`

const IconImg =styled.div`
    z-index: 0;
    margin: 0 auto; 
`

export const IconWrapper =styled.div`
z-index: 0; 
display: flex; 
    position: relative;


    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        background: rgba(96, 107, 132, 0.6);

        position: absolute; 
        left: 50%;
        top: 50%;
        transform-origin: top left;
        z-index: -1; 

    }
`


export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText, 
    IconImg,
    IconWrapper,


}