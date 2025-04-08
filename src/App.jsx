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
import { LanguageProvider } from "./components/LanguageContext";
import Footer from "./components/Footer";


import "./components/Fonts.css";



function App() {
  

  return (
    <>
      <LanguageProvider>
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
        <Footer/>
      </LanguageProvider>
    </>
  )
}

export default App
