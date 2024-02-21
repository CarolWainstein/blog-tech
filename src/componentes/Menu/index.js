import { useLocation } from 'react-router-dom';
import './Menu.css';
import MenuLink from '../MenuLink';
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Menu() {
    const localizacao = useLocation();

    return (
        <header>
            <nav className='navegacao'>
                <div className='icones'>
                    <a href="https://github.com/CarolWainstein" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="icone" />
                    </a>
                    <a href="https://www.linkedin.com/in/carolina-wainstein-55486487/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icone" />
                    </a>
                    <a href="https://www.instagram.com/angellovelys" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icone" />
                    </a>
                </div>
                
                <div className='menu-link'>
                    <MenuLink to={'/'}>
                        Inicio
                    </MenuLink>
                    <MenuLink to={'/sobremim'}>
                        Sobre Mim
                    </MenuLink>
                </div>

            </nav>
        </header>
    )
}