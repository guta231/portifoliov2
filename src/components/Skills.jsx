import styled from "styled-components";
import {useInView} from "react-intersection-observer";

const SkillContainer = styled.div`  
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    opacity: 0;
    transition: opacity 1s ease-in-out;

&.in-view{
    opacity: 1;
}

`
const ContentSkill = styled.div`

    color: #bdd4f7;
    font-size: 1.5rem;
    font-family: "Jura", serif;
    border-right: solid 5px #f2f2f2de;
    animation: mark .8s step-end infinite;

@keyframes mark{
    50%{
        border-right-color: transparent;
    }
}
`


const Skills = () => {

    const {ref, inView} = useInView({

        triggerOnce: true,
        threshold: 0.5,
    })



    return(
        <SkillContainer id="skills" ref={ref} className={inView ? "in-view" : ""}>
            <ContentSkill>
                <h1>Habilidades</h1>
            </ContentSkill>
        </SkillContainer>
    )
}

export default Skills