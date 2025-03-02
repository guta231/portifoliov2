import styled from "styled-components";

const Container = styled.div`
    
        display: flex;
        justify-content: center;
        margin-top: 20vh;
    
    `

    const Msg = styled.div`
        color: #bdd4f7;
        font-size: 3rem;
        display: block;
        font-weight: 700;
        font-family: "Jura", serif;

        border-right: solid 5px #ffffffbe;
        white-space: nowrap;

        

        overflow: hidden;

        animation: mark .8s step-end infinite, write 10s steps(22, end) infinite;


        @media (min-width: 1283px){
            font-size: 4rem;
        }
    @keyframes mark{
        50%{
            border-right-color: transparent;
        }
    }

    @keyframes write{
        0%{
            width: 0;
        }
        40%{
            width: 9.3ch;
        }

        

        85%{
            width: 9.3ch;
        }

        100%{
            width: 0;
        }
    }
    `

const Hello = () =>{

    



    return(
        <>
            <Container id="about">

                <Msg>Hello World!</Msg>

            </Container>
        </>
    )

}

export default Hello