import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import Linkedin from "../assets/icons8-linkedin.svg";
import Gmail from "../assets/icons8-gmail.svg";
import Github from "../assets/icons8-github.svg";
import Whatsapp from "../assets/icons8-whatsapp.svg";
import {Link} from "react-router-dom";

const ContatosContainer = styled.section`

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
    
}

`
const ImagensContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
img{
    padding: 5vh;
    scale: 100%;
    transition: 0.3s;
}

img:hover{
    transform: scale(120%);
    
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


const ContatosSection = () => {

    const {ref, inView} = useInView({

        triggerOnce: true,
        threshold: 0.5,

    })


    return(
        
            <ContatosContainer ref={ref} className={inView ? "in-view" : ""}>
                <fieldset>
                    <ImagensContainer>
                        <p>
                            <Link to="https://www.linkedin.com/in/gustavo-henrique-a4aa762b1/" target="_blank"><img src={Linkedin} alt="Icone linkedin"/></Link>
                            <Link to="mailto:gustavoho2005@gmail.com" target="_blank"><img src={Gmail} alt="Icone gmail"/></Link>
                            <Link to="https://github.com/guta231" target="_blank"><img src={Github} alt="Icone github" /></Link>
                            <Link to="https://wa.me/5511972960449" target="_blank"><img src={Whatsapp} alt="Icone Whatsapp" /></Link>
                        </p>
                    </ImagensContainer>
                </fieldset>

            </ContatosContainer>
        
    )
}

export default ContatosSection