import styled from "styled-components";
import perfil from "../assets/87510192_sem_fundo.png";

const AboutSection = styled.section`
        display: flex;
        
        justify-content: center;
        height: 70vh;
    .perfil{
        display: flex;
        align-items: center;
        font-size: 20px;
        text-align: center;
        
    }
    

   

    @media (max-width: 1283px){
        .perfil{
            display: block;
            font-size: 17px;
            
        }

    }
    `


    const Img = styled.img`
        
        border-bottom: 3px solid #1871e6;
        border-right: 3px solid #1871e6;
        scale: 100%;
        border-radius: 10%;
        transform: scaleX(-1);
        background: linear-gradient(344deg, rgba(33,27,126,1) 0%, rgba(16,16,62,1) 45%, rgba(13,126,149,1) 100%);
    

        @media (max-width: 1283px){
            scale: 80%;
        }
    `

    const Fieldset = styled.fieldset`
        color: #f2f2f2;
        height: 35vh;
        width: 50vw;
        scale: 90%;
        border: none;
        border-bottom: solid 1px;
        border-top: solid 1px;
        border-radius: 3%;
        background-color: #05051d3b;
    p{
        margin: 10px;
        text-align: center;
        font-family: "Jura", serif;
    }
    div{
        margin-top: 2vh;
        display: flex;
        justify-content: center;
        font-family: "Cormorant Garamond", serif;
    }

    @media (max-width: 1283px){
        width: 80%;
        height: 60%;
        margin-left: 10%;
    }
    `

const About = () => {


    



    return(

        <AboutSection>
            
            <div className="perfil">
                <Img src={perfil}/>
                <Fieldset><p>Estudante de Engenharia de Software na FIAP - Faculdade de Informática e Administração Paulista, com amplos conhecimentos gerais em tecnologia e um compromisso contínuo com a aprendizagem. Possuo grande interesse em Engenharia de Dados. Sou flexível e versátil, capaz de me adaptar a diferentes áreas, e tenho uma grande sede por conhecimento.</p><div>“Eu não sou um programador, sou um solucionador de problemas que usa código."</div><div>~Scott Hanselman</div></Fieldset>
            </div>
        </AboutSection>
            
    );
}


export default About;