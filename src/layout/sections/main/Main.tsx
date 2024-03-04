import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { theme } from '../../../styles/Theme';




export const Main = () => {
    return (
        <StyledMain>
           <Conteiner>
                <FlexWrapper align={'center'} justify={'space-between'}>
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


const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`

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
    }
`


const MainTitle = styled.h1 `
    font-weight: 400;
    font-size: 27px;
`  
const Name = styled.h2 `
    font-family: 'Josefin Sans' sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    /* margin: 10px 0; */
    


    span {
        position: relative; 
        z-index: 0; 

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

`  

const SmallText = styled.h2 `
    font-weight: 400;
    font-size: 14px;
`  