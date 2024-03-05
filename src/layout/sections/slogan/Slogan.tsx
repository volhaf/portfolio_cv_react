import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Conteiner } from '../../../components/Conteiner';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Conteiner>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Here me</Button>
                </FlexWrapper>
            </Conteiner>
            
        </StyledSlogan>
    );
};



const StyledSlogan = styled.section`
    
`