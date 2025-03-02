import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Python from "../assets/icons8-python.svg";
import NativeReact from "../assets/icons8-nativo-de-reagir.svg";
import Mysql from "../assets/icons8-mysql.svg";
import Javascript from "../assets/icons8-javascript.svg";
import Arduino from "../assets/icons8-arduino.svg";

const SkillsContainer = styled.div`
    height: 50vh;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 1s ease-in-out;
    
fieldset{
    background-color: #05051d3b;
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


    const {ref, inView} = useInView({
        
        triggerOnce: true,
        threshold: 0.5,
    })

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
                    </p>
                </SkillsContent>
            </fieldset>
        
        </SkillsContainer>
    )
}

export default SkillsSection