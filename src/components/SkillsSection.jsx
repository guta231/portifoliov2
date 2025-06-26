import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Python from "../assets/icons8-python.svg";
import NativeReact from "../assets/icons8-nativo-de-reagir.svg";
import Mysql from "../assets/icons8-mysql.svg";
import Javascript from "../assets/icons8-javascript.svg";
import Arduino from "../assets/icons8-arduino.svg";
import Node from "../assets/icons8-nodejs.svg";
import Azure from "../assets/icons8-azure.svg";
import Linux from "../assets/icons8-linux-50.png";
import {useLanguage} from "./LanguageContext";

const SkillsContainer = styled.div`
    height: 50vh;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .7s ease-in-out;
    
fieldset{
    background-color: #05051d3b;
    color: white;
    text-align: center;
    font-size: 24px;
    width: 90%;
    border: none;
    border-top: solid 2px #f2f2f2;
    border-bottom: solid 2px #f2f2f2;
    border-radius: 3%;
}
&.in-view{
    opacity: 1;
}

@media (max-width: 1283px){
    margin-top: 10vh;
}
`
const SkillsContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
img{
    padding: 5vh;
    scale: 100%;
}

@media (max-width: 1283px){
    display: block;
    text-align: center;
    
    img{
        scale: 100%;
        padding: 5vh;
    }
}

`


const SkillsSection = () => {

    /* 
    
        Para adicionar um novo icone de skill:

        1. importe o icone da pasta assets.
        2. crie uma tag <img/> nova com a imagem importada
    
    */


    const {ref, inView} = useInView({
        
        triggerOnce: true,
        threshold: 0.5,
    })

    const {t} = useLanguage();
    return(
        <SkillsContainer ref={ref} className={inView ? "in-view" : ""}>
            <fieldset>
                <SkillsContent>
                    <p>
                        <img src={Python} alt="Icone linkedin"/>
                        <img src={NativeReact} alt="Icone gmail"/>
                        <img src={Mysql} alt="Icone github" />
                        <img src={Javascript} alt="Icone Whatsapp" />
                        <img src={Arduino} alt="Icone arduino" />
                        <img src={Node} alt="Icone nodejs" />
                        <img src={Azure} alt="Icone azure" />
                        <img src={Linux} alt="Icone linux" />
                    </p>
                </SkillsContent>
                <p>{t.certifications}<a href="https://cursos.alura.com.br/user/gustavoho2005/fullCertificate/26ad57c8bb2efb9877606ffb21c0d61b">Alura</a> | <a href=""> FIAP</a></p>
            </fieldset>
            
        
        </SkillsContainer>
    )
}

export default SkillsSection