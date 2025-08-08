import styled from "styled-components";
import {useInView} from "react-intersection-observer"; 
import {useLanguage} from "./LanguageContext";

const ContentContainer = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 20vh;
    
`

const Content = styled.div`
    color: #ffffff;
    font-size: 1.8rem;
    opacity: 0;
    transition: opacity .7s ease-in-out;
    overflow: hidden;
    white-space: nowrap;

    &.in-view{
        opacity: 1;
    }

`

const Contatos = () => {



    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const {t} = useLanguage();

    return(
        <ContentContainer>

            <div ref={ref}>
                <Content className={inView ? "in-view" : ""}>
                    <h1>{t.contacts}</h1>
                </Content>
            </div>

        </ContentContainer>
    )

}

export default Contatos