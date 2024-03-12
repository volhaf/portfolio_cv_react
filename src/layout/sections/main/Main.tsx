import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';





export const Main = () => {
    return (
        <StyledMain>
           <Conteiner>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Volha Filanovich</span></Name>
                        <MainTitle>Frontend Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
           </Conteiner>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ddc7cf;
    display: flex;
    color: ${theme.color.fontColorTitle};

`

const PhotoWrapper = styled.div`
    position: relative; 
    z-index: 0; 

    &::before {
        content: "";
        width: 300px;
        height: 450px;
        border: 5px solid ${theme.color.accentColor};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1; 

        @media ${theme.media.mobile} {
            width: 275px;
            height: 400px;
            top: -17px;
            left: 20px;

        }
    }
    @media ${theme.media.mobile} {
        margin-top: 50px;
    }

`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 270px;
        height: 350px;

    }
` 


const MainTitle = styled.h1 `
${font({family:"'Josefin Sans' sans-serif", weight: 400, Fmax: 27, Fmin: 20,})}
`  
const Name = styled.h2 `
    ${font({family:"'Josefin Sans' sans-serif", weight: 700, Fmax: 50, Fmin: 36,})}
    letter-spacing: 0.05em;
    margin: 10px 0;


    span {
        position: relative; 
        z-index: 0; 
        white-space: nowrap;


        &::before {
            content: "";
            display: inline-block; 
            width: 100%;
            height: 20px; 
            background-color: ${theme.color.accentColor}; 

            position: absolute;
            bottom: 5px; 
            z-index: -1; 

        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }

`  

const SmallText = styled.h2 `
    font-weight: 400;
    font-size: 14px;
`  