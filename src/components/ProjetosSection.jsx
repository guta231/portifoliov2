import styled from "styled-components";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImgVigilRace1 from "../assets/VigilRace_team.jpg";
import ImgVigilRace2 from "../assets/Imagem_VigilRace2.jpg";
import ImgVigilRace3 from "../assets/imagem_VigilRace3.jpg";
import ImgAlgaTech1 from "../assets/imagem_AlgaTech1.jpeg";
import ImgAlgaTech2 from "../assets/imagem_AlgaTech2.jpeg";
import ImgAlgaTech3 from "../assets/imagem_AlgaTech3.jpeg";
import { useLanguage } from "./LanguageContext";
import {Link} from "react-router-dom";

const ProjetosContainer = styled.section`
    padding: 10px;
`;

const Projeto = styled.div`
    opacity: 0;
    display: flex;
    padding: 10vh;
    justify-content: center;
   
    transition: opacity .7s ease-in-out;

    &.in-view {
        opacity: 1;
    }

    .container {
        display: flex;
        gap: 10vw;
        height: 35vh;
        align-items: center;
    }

    .image-container {
        position: relative;
        width: 15vw;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        border-bottom: solid 3px #1871e6;
        border-left: solid 3px #1871e6;
        border-radius: 15%;
        position: absolute;
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    .fade-in {
        opacity: 1;
    }

    fieldset {
        text-align: center;
        color: #f2f2f2;
        display: flex;
        border: none;
        border-top: solid 1px #f2f2f2;
        border-bottom: solid 1px #f2f2f2;
        border-radius: 3%;
        background-color: #05051d3b;
        width: 35vw;
    }
    p{
        margin-top: 5vh;
        margin-bottom: 5vh;
        font-family: "Jura", serif;
    }

    h1 {
        font-size: 40px;
        color: #f2f2f2;
        text-align: center;
        font-family: "Jura", serif;
    }
    .saiba_mais{
        font-size: 20px;
        font-family: "Inter", serif;
        text-decoration: none;
        color: #7982f5;
        border: none;
        border-right: 5px solid;
        animation: mark_saiba_mais .8s ease-in-out infinite;
        
    }
    .saiba_mais:hover{
        color: #a7a6a6;
    }
    @keyframes mark_saiba_mais{
        50%{
            border-right-color: transparent;
        }
    }

    @media (max-width: 1283px) {
            padding: 20vh;
        .container {
            display: block;
            height: 30vh;
            margin-bottom: 30vh;
            
        }

        h1 {
            margin-top: 5vh;
        }

        fieldset {
            font-size: 13px;
            width: 80vw;
            margin-top: 3vh;
        }

        .image-container {
            width: 50vw;
            margin-left: 15vw;
        }
    }
`;

const ProjetosSection = () => {

    /* 
    
    Para adicionar um novo projeto a sessão siga as seguintes etapas:


        1. importe da pasta assets as imagens a serem utilizadas do projeto para esse componente.
        2. crie uma lista com essas imagens importadas.
        3. crie um useState para definir a imagem atual do projeto adicionado
        4. copie um componente Projeto e cole-o logo abaixo do ultimo projeto adicionado e altere as variaveis de acordo
        5. crie um useEffect seguindo o mesmo padrão dos outros projetos, porém com variaveis modificadas.
        6. troque textos e links
    
    
    
    
    */
    const imagensAlgaTech = [ImgAlgaTech1, ImgAlgaTech2, ImgAlgaTech3];
    const [imagemAlgaTech, setImagemAlgaTech] = useState(0);
    const imagens = [ImgVigilRace1, ImgVigilRace2, ImgVigilRace3];
    const [imagemAtual, setImagemAtual] = useState(0);
    const [fade, setFade] = useState(true);
    const [fadeAlgaTech, setFadeAlgaTech] = useState(true);

    const {t} = useLanguage();

    useEffect(() => {
        const trocaImagem = () => {
            setFade(false);
            setTimeout(() => {
                setImagemAtual((prev) => (prev + 1) % imagens.length);
                setFade(true);
            }, 500);
        };

        const intervalo = setInterval(trocaImagem, 3000);
        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        const trocaImagemAlgaTech = () => {
            setFadeAlgaTech(false);
            setTimeout(() => {
                setImagemAlgaTech((prev) => (prev + 1) % imagensAlgaTech.length);
                setFadeAlgaTech(true);
            }, 500);
        };

        const intervaloAlgaTech = setInterval(trocaImagemAlgaTech, 3000);
        return () => clearInterval(intervaloAlgaTech);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <ProjetosContainer id="projetos">
            <Projeto ref={ref} className={inView ? "in-view" : ""}>
                <div className="container">
                    <div className="image-container">
                        {imagens.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Imagem do VigilRace"
                                className={index === imagemAtual && fade ? "fade-in" : ""}
                            />
                        ))}
                    </div>
                    <h1>VigilRace</h1>
                    <fieldset><p>{t.vigilrace_p1}<br/><br/>{t.vigilrace_p2}<br/><br/><Link to="https://www.linkedin.com/posts/milena-garcia-605931256_meu-grupo-e-eu-tivemos-a-oportunidade-de-ugcPost-7258565795226525696-f2ZM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWLVoB8GcNpElM93jRzecehyM0KocCwPE" target="_blank" className="saiba_mais">{t.saiba_mais}</Link></p></fieldset>
                </div>
            </Projeto>
            <Projeto ref={ref} className={inView ? "in-view" : ""}>
                <div className="container">
                    <div className="image-container">
                        {imagensAlgaTech.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Imagem do AlgaTech"
                                className={index === imagemAlgaTech && fadeAlgaTech ? "fade-in" : ""}
                            />
                        ))}
                    </div>
                    <h1>AlgaTech</h1>
                    <fieldset><p>{t.algatech_p1}<br/><br/>{t.algatech_p2}<br/><br/><Link to="https://www.linkedin.com/posts/gustavo-henrique-a4aa762b1_videopitch-algatech-activity-7265944145171472384-1B6e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsWLVoB8GcNpElM93jRzecehyM0KocCwPE" target="_blank" className="saiba_mais">{t.saiba_mais}</Link></p></fieldset>
                </div>
            </Projeto>
        </ProjetosContainer>
    );
};

export default ProjetosSection;
