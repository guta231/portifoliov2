import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./LanguageContext";


const ContentContainer = styled.div`
  height: 10vh;
  display: flex;
  margin-top: 30vh;
  justify-content: center;
  font-size: 2rem;
  font-family: "Jura", serif;
  z-index: 1;
`;

const Content = styled.div`
  opacity: 0;
  color: #ffffff;
  transition: opacity .7s ease-in-out;
  overflow: hidden;
  white-space: nowrap;

  &.in-view {
    opacity: 1;
  }

  
`;

const Projetos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Isso faz com que o conteúdo só apareça uma vez
    threshold: 0.5,     // O conteúdo precisa estar 50% visível para ser ativado
  });

  const {t} = useLanguage();

  return (
    <ContentContainer>
      <div ref={ref}>
        <Content className={inView ? "in-view" : ""}>
          <h1>{t.projects}</h1>
        </Content>
      </div>
    </ContentContainer>
  );
};

export default Projetos;
