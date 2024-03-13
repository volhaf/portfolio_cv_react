import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Conteiner } from "../../components/Conteiner";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'; 

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]; 


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Conteiner>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/> 
                                        : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Conteiner>
        </S.Header>
    );
};