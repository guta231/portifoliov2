import styled from "styled-components";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImgVigilRace1 from "../assets/VigilRace_team.jpg";
import ImgVigilRace2 from "../assets/Imagem_VigilRace2.jpg";
import ImgVigilRace3 from "../assets/imagem_VigilRace3.jpg";
import ImgAlgaTech1 from "../assets/imagem_AlgaTech1.jpeg";
import ImgAlgaTech2 from "../assets/imagem_AlgaTech2.jpeg";
import ImgAlgaTech3 from "../assets/imagem_AlgaTech3.jpeg";

const ProjetosContainer = styled.section`
    padding: 10px;
`;

const Projeto = styled.div`
    opacity: 0;
    display: flex;
    justify-content: center;
    gap: 10vw;
    margin-top: 15vh;
    transition: opacity 1s ease-in-out;

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
        margin-top: 2vh;
        margin-bottom: 2vh;
        font-family: "Jura", serif;
    }

    h1 {
        font-size: 40px;
        color: #f2f2f2;
        text-align: center;
        font-family: "Jura", serif;
    }

    @media (max-width: 1283px) {
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
    const imagensAlgaTech = [ImgAlgaTech1, ImgAlgaTech2, ImgAlgaTech3];
    const [imagemAlgaTech, setImagemAlgaTech] = useState(0);
    const imagens = [ImgVigilRace1, ImgVigilRace2, ImgVigilRace3];
    const [imagemAtual, setImagemAtual] = useState(0);
    const [fade, setFade] = useState(true);
    const [fadeAlgaTech, setFadeAlgaTech] = useState(true);

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
                    <fieldset><p>Finalista na competição NEXT da FIAP 2024, ficando entre os 6 melhores de quase 100 grupos, com o projeto Vigil Race, desenvolvido para a Tech Mahindra. O objetivo foi criar uma plataforma inovadora para popularizar a Fórmula E, integrando gamificação, IoT e engajamento social. <br/><br/>1. IoT e Monitoramento em Tempo Real
2. Desenvolvimento de Software e Protótipos
3. Estratégias de Gamificação e Engajamento
4. Trabalho em Equipe e Solução de Problemas</p></fieldset>
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
                    <fieldset><p>Projeto desenvolvido para a Global Solution - 2º semestre de 2024, com o tema "Green Energy - energia limpa para um futuro mais sustentável", em parceria com empresas como SAP, Ultragaz e Pacto Global.<br/><br/>Geração de energia solar: para garantir a autossustentabilidade do sistema;
IoT (Internet of Things): para comunicação e monitoramento das microalgas;
Eletrofloculação: para otimizar o processo de coleta das algas.</p></fieldset>
                </div>
            </Projeto>
        </ProjetosContainer>
    );
};

export default ProjetosSection;
