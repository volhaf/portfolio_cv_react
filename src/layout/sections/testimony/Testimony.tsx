
import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { theme } from '../../../styles/Theme';
import {S} from '../skills/Skill_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Conteiner>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId ={'test'} width={"42"} height={"32"} viewBox= {"0 0 42 32"}/>
                </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Conteiner>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

    ${S.IconWrapper} {
        margin-bottom: 60px;
        
    }

`
