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
import TargetCursor from "./components/TargetCursor";
import DarkVeil from "./components/DarkVeil";

import "./components/Fonts.css";

function App() {
  return (
    <>
      {/* DarkVeil como plano de fundo fixo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <DarkVeil />
      </div>
      {/* Conteúdo principal acima do background */}
      <div style={{ width: '100vw', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <TargetCursor spinDuration={4} hideDefaultCursor={true} />
        <LanguageProvider>
          <Navbar />
          <Hello />
          <About />
          <Translate />
          <Projetos />
          <ProjetosSection />
          <Skills />
          <SkillsSection />
          <Contatos />
          <ContatosSection />
          <Footer />
        </LanguageProvider>
      </div>
    </>
  )
}

export default App
