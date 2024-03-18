import styled from "styled-components"
import { theme } from "../../styles/Theme"



const Slider = styled.div`
    max-width: 500px;
    width: 100%; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
`
const Slide =styled.div`
text-align: center; 
`
const Text =styled.p``

const Name =styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${theme.color.fontColorTitle};
    margin: 20px 0 40px;
    display: inline-block; 
`
const Pagination =styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px; 
        
        
        background-color: ${theme.color.opasityBg};
        border-radius: 20px; 


        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.color.accentColor};
            width: 20px;

        }



    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}
