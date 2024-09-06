import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from "../img/logo.png";

const logoPng = [logo];

const Navbar = () => {
  return (
    <div className="tela-navbar">
      <div className="logo">
        <a href="#">
          <img src={logoPng} alt="minha logo" />
        </a>
      </div>

      <nav className="menu-desktop">

        <nav className="menu-desktop">
          <lu>
            <AnchorLink className="li" href="#home" offset="100">
              Ínicio
            </AnchorLink>
            <AnchorLink className="li" href="#expertise" offset="100">
              Especialidades
            </AnchorLink>
            <AnchorLink className="li" href="#about" offset="100">
              Sobre mim
            </AnchorLink>
            <AnchorLink className="li" href="#projects" offset="100">
              Projetos
            </AnchorLink>
          </lu>
        </nav>


        
      </nav>

 
      <div className="btn-abrir-menu">
      <i class="bi bi-list"></i>
     </div>
      

      <nav className="menu-mobile">

      <div className="btn-fechar">
          <i class="bi bi-x-lg"></i>
      </div>
      <lu className="lu-mobile"> 
            <li><a className="li-mobile" href="#home">Ínicio</a></li>
            <li><a className="li-mobile" href="#expertise">Especialidades</a></li>
            <li><a className="li-mobile" href="#about">Sobre mim</a></li>
            <li><a className="li-mobile" href="#projects">Projetos</a></li>
            <li><a className="li-mobile" href="#home">Contato</a></li>
          </lu>
      </nav>

      <div className="overlay-menu">

      </div>
      
      

      <div className="contato-home">
        <nav className="bts">
          <AnchorLink className="btn-contato" href="#contact">
            Contato
          </AnchorLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
