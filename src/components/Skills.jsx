import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import {useLanguage} from "./LanguageContext";

const SkillContainer = styled.div`  
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    opacity: 0;
    transition: opacity .7s ease-in-out;

&.in-view{
    opacity: 1;
}

`
const ContentSkill = styled.div`

    color: #ffffff;
    font-size: 1.5rem;
    font-family: "Jura", serif;

`


const Skills = () => {

    const {ref, inView} = useInView({

        triggerOnce: true,
        threshold: 0.5,
    })

    const {t} = useLanguage();

    return(
        <SkillContainer ref={ref} className={inView ? "in-view" : ""}>
            <ContentSkill>
                <h1>{t.skills}</h1>
            </ContentSkill>
        </SkillContainer>
    )
}

export default Skills