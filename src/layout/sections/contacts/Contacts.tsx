import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Conteiner } from '../../../components/Conteiner';
import { S } from './Contacts_Styles';


export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Conteiner>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Conteiner>
        </S.Contacts>
    );
};

