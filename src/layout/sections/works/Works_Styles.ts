import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { LinkTab } from "../../../components/Link";
import { Button } from "../../../components/button/Button";



const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px; 
    }
`

const Work = styled.div`
    background-color: ${theme.color.secondaryBg};
    /* width: 330px;
    flex-grow: 1;  */


    ${LinkTab} {
        padding: 10px 0;

        & + ${LinkTab} {
            margin-left: 10px;
        }
    }

/* 
    @media ${theme.media.desktop} {
        max-width: 540px;
    } */
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -20%); 
    transition: ${theme.animations.transition};

    &::before {
        width: 100%;
        height: 100%;
    }
}

&::before {
        content: "";
        position: absolute; 
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(3px);
        opacity: 0;
        transition: ${theme.animations.transition}; 
    }

&:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%); 
        }
}
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
    color: ${theme.color.accentColor};
    text-transform: uppercase; 
    
`

const Text = styled.p`
    margin: 15px 0 10px;
`


export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
}