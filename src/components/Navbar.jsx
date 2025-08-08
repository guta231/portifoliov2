import styled from "styled-components";
import {Link} from "react-scroll";
import { useLanguage } from "./LanguageContext";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    color: #f2f2f2;
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    z-index: 1;

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
        transition: background 0.3s, color 0.3s;
        border-radius: 8px;
        padding: 6px 18px;
    }

    .link.active {
        background: rgba(255, 255, 255, 0.25);
        color: #fff;
    }

    @media (max-width: 1283px){
        .link{
            font-size: 14px;
        }
    }
`;

const Navbar = () => {

    const { t } = useLanguage();
    


    return(
        <Nav>
            <div>
                <ul>
                    <li><Link className="link cursor-target" activeClass="active" to="projetos" spy={true} smooth={true} duration={500}>{t.projects}</Link></li>
                    <li><Link className="link cursor-target" activeClass="active" to="contatos" spy={true} smooth={true} duration={500}>{t.contacts}</Link></li>
                    <li><Link className="link cursor-target" activeClass="active" to="skills" spy={true} smooth={true} duration={500}>{t.skills}</Link></li>
                    <li><Link className="link cursor-target" activeClass="active" to="about" spy={true} smooth={true} duration={500}>{t.about}</Link></li>
                </ul>
            </div>
        </Nav>
    )
}

export default Navbar;