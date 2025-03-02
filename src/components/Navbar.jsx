import styled from "styled-components";
import {Link} from "react-scroll";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #0d1117; 
    color: #f2f2f2;
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    ul {
        display: flex;
        list-style: none;
        gap: 10vw;
    }

    .link {
        color: #f2f2f2;
        text-decoration: none;
        font-size: 20px;
        font-family: "Inter", serif;
    }

    .link:hover {
        color: #c9c6c6;
        cursor: pointer;
    }

    @media (max-width: 1283px){
        .link{
            font-size: 14px;
        }
    }
`;

const Navbar = () => {


    


    return(
        <Nav>
            <div>
                <ul>
                    <li><Link className="link" to="projetos" smooth="true" duration={500}>Projetos</Link></li>
                    <li><Link className="link" to="contatos" smooth="true" duration={500}>Contatos</Link></li>
                    <li><Link className="link" to="skills" smooth="true" duration={500}>Habilidades</Link></li>
                    <li><Link className="link" to="about" smooth="true" duration={500}>Sobre</Link></li>
                </ul>
            </div>
        </Nav>
    )
}

export default Navbar;