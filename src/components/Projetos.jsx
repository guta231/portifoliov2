import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";


const ContentContainer = styled.div`
  height: 10vh;
  display: flex;
  margin-top: 30vh;
  justify-content: center;
  font-size: 2rem;
  font-family: "Jura", serif;
`;

const Content = styled.div`
  opacity: 0;
  color: #bdd4f7;
  transition: opacity 1s ease-in-out;
  border-right: solid 5px #ffffffbe;
  animation: mark .8s step-end infinite;
  overflow: hidden;
  white-space: nowrap;

  &.in-view {
    opacity: 1;
  }

  @keyframes mark{
    50%{
        border-right-color: transparent;
    }
  }
`;

const Projetos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Isso faz com que o conteúdo só apareça uma vez
    threshold: 0.5,     // O conteúdo precisa estar 50% visível para ser ativado
  });

  return (
    <ContentContainer>
      <div ref={ref}>
        <Content className={inView ? "in-view" : ""}>
          <h1>Projetos</h1>
        </Content>
      </div>
    </ContentContainer>
  );
};

export default Projetos;
