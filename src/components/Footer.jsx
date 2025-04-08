import styled from "styled-components";
import {useLanguage} from "./LanguageContext";



const FooterContainer = styled.footer`

    background-color: #000;
    color: #bdd4f7;
    display: flex;
    justify-content: center;
    height: 10vh;
    align-items: center;
    font-size: 18px;
    text-align: center;
`


const Footer = () => {

    const {t} = useLanguage();


    return(
        <>
            <FooterContainer>
                <p>{t.footer}</p>

            </FooterContainer>
        </>


    );


}

export default Footer;