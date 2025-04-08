
/* 
    para traduzir um texto:
    
    1. crie uma nova key com o mesmo nome no objeto pt para portugues e en para ingles para o que quer traduzir.
    2. adicione o texto em portugues na key nova criada no pt
    3. adicione a key criada no en o mesmo texto porém em sua forma traduzida para o inglês
    4. use {t.<nome da chave>} no lugar do texto do componente


*/



const translations = {
    pt:{
        projects: "Projetos",
        contacts: "Contatos",
        skills: "Habilidades",
        about: "Sobre",
        about_text: "Estudante de Engenharia de Software na FIAP - Faculdade de Informática e Administração Paulista, com amplos conhecimentos gerais em tecnologia e um compromisso contínuo com a aprendizagem. Possuo grande interesse em Engenharia de Dados. Sou flexível e versátil, capaz de me adaptar a diferentes áreas, e tenho uma grande sede por conhecimento.",
        about_frase: "Eu não sou um programador, sou um solucionador de problemas que usa código.",
        vigilrace_p1: "Finalista na competição NEXT da FIAP 2024, ficando entre os 6 melhores de quase 100 grupos, com o projeto Vigil Race, desenvolvido para a Tech Mahindra. O objetivo foi criar uma plataforma inovadora para popularizar a Fórmula E, integrando gamificação, IoT e engajamento social.  Saiba mais",
        vigilrace_p2: "1. IoT e Monitoramento em Tempo Real 2. Desenvolvimento de Software e Protótipos 3. Estratégias de Gamificação e    Engajamento 4. Trabalho em Equipe e Solução de Problemas.",
        algatech_p1: 'Projeto desenvolvido para a Global Solution - 2º semestre de 2024, com o tema "Green Energy - energia limpa para um futuro mais sustentável", em parceria com empresas como SAP, Ultragaz e Pacto Global."',
        algatech_p2: "Geração de energia solar: para garantir a autossustentabilidade do sistema; IoT (Internet of Things): para comunicação e monitoramento das microalgas; Eletrofloculação: para otimizar o processo de coleta das algas.",
        saiba_mais: "Saiba mais",
        footer: "© 2025 Gustavo Henrique. Todos os direitos reservados.",
    },
    en:{
        projects: "Projects",
        contacts: "Contacts",
        skills: "Skills",
        about: "About",
        about_text: "Student of Software Engineering at FIAP - Faculty of Informatics and Administration Paulista, with extensive general knowledge in technology and a continuous commitment to learning. I have a strong interest in Data Engineering. I am flexible and versatile, able to adapt to different areas, and have a great thirst for knowledge.",
        about_frase: '"I am not a programmer, I am a problem solver who uses code."',
        vigilrace_p1: "Finalist in the FIAP 2024 NEXT competition, ranking among the top 6 of almost 100 groups, with the Vigil Race project, developed for Tech Mahindra. The goal was to create an innovative platform to popularize Formula E by integrating gamification, IoT and social engagement.",
        vigilrace_p2: "1. IoT and Real-Time Monitoring 2. Software Development and Prototypes 3. Gamification and Engagement Strategies 4. Teamwork and Problem Solving.",
        algatech_p1: 'Project developed for the Global Solution - 2nd half of 2024, with the theme "Green Energy - clean energy for a more sustainable future", in partnership with companies such as SAP, Ultragaz and Global Compact."',
        algatech_p2: "Solar energy generation: to ensure the self-sustainability of the system; IoT (Internet of Things): for communication and monitoring of microalgae; Electroflocculation: to optimize the process of collecting algae.",
        saiba_mais: "Learn more",
        footer: "© 2025 Gustavo Henrique. All rights reserved.",
    },
};

export default translations;