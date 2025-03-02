import styled from "styled-components";
import {useInView} from "react-intersection-observer";

const ContentContainer = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 20vh;
    
`

const Content = styled.div`
    color: #bdd4f7;
    font-size: 1.8rem;
    border-right: solid 5px #f2f2f2be;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    overflow: hidden;
    white-space: nowrap;
    animation: mark .8s step-end infinite;

    &.in-view{
        opacity: 1;
    }


    @keyframes mark{
        50%{
            border-right-color: transparent;
        }
}
`



const Contatos = () => {



    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return(
        <ContentContainer id="contatos">

            <div ref={ref}>
                <Content className={inView ? "in-view" : ""}>
                    <h1>Contatos</h1>
                </Content>
            </div>

        </ContentContainer>
    )

}

export default Contatos