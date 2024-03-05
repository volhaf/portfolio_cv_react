import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Conteiner } from '../../../components/Conteiner';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Conteiner>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Conteiner>
        </StyledContacts>
    );
};

const StyledContacts = styled.section `

`

const StyledForm = styled.form `
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;


textarea {
    resize: none;
    height: 155px; 
}

`

const Field = styled.input `
    width: 100%;
    background-color: ${theme.color.secondaryBg};
    border: 1px solid ${theme.color.fontColorTitle};
    border-radius: 5px; 
    padding: 7px 15px;


    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05rem;
    color: ${theme.color.fontColorTitle};

    &::placeholder {
        color: ${theme.color.fontColorTitle};
        text-transform: capitalize; 
    }

    &:focus-visible {
        outline: 1px solid ${theme.color.fontColorTitle}; 
    }

`
