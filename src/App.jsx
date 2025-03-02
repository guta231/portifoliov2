import Navbar from "./components/Navbar";
import About from "./components/About";
import Hello from "./components/Hello";
import Translate from "./components/Translate";
import Projetos from "./components/Projetos";
import ProjetosSection from "./components/ProjetosSection";
import Contatos from "./components/Contatos";
import ContatosSection from "./components/ContatosSection";
import Skills from "./components/Skills";
import SkillsSection from "./components/SkillsSection";

import "./components/Fonts.css";


function App() {
  

  return (
    <>
      <Navbar/>
      <Hello/>
      <About/>
      <Translate/>
      <Projetos/>
      <ProjetosSection/>
      <Skills/>
      <SkillsSection/>
      <Contatos/>
      <ContatosSection/>
    </>
  )
}

export default App
