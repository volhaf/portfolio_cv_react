import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';




export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Volha Filanovich</h2>
                    <MainTitle>Frontend Developer</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
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
    background-color: #ddc7cf
`

const MainTitle = styled.h1 `
    
`  