import styled from "styled-components";
import TextType from "./TextType";

const HelloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  font-size: 80px;
  margin-top: 20vh;
`;

const Hello = () => (
  <HelloContainer id="about">
    <TextType
      text={["Hello World!"]}
      typingSpeed={120}
      pauseDuration={2000}
      showCursor={true}
      cursorCharacter="_"
      loop={true} // Adicione esta linha
    />
  </HelloContainer>
);

export default Hello;