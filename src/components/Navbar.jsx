import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

import logo from "../img/logo.png";

const logoPng = [logo];

const Navbar = () => {
  const [mostrarMenuMobile, setMostrarMenuMobile] = useState(false);

  const mostrarMenu = () => {
    setMostrarMenuMobile(true);
  };

  const fecharMenu = () => {
    setMostrarMenuMobile(false);
  };

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

      <div className="btn-abrir-menu" id="btn-menu" onClick={mostrarMenu}>
        <i className="bi bi-list"></i>
      </div>

      {mostrarMenuMobile && (
        <nav className="menu-mobile">
          <div className="btn-fechar" onClick={fecharMenu}>
            <i className="bi bi-x-lg"></i>
          </div>
          <lu className="lu-mobile">
            <li>
              <a className="li-mobile" href="#home" onClick={fecharMenu}>
                Ínicio
              </a>
            </li>
            <li>
              <a className="li-mobile" href="#expertise" onClick={fecharMenu}>
                Especialidades
              </a>
            </li>
            <li>
              <a className="li-mobile" href="#about" onClick={fecharMenu}>
                Sobre mim
              </a>
            </li>
            <li>
              <a className="li-mobile" href="#projects" onClick={fecharMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a className="li-mobile" href="#contact" onClick={fecharMenu}>
                Contato
              </a>
            </li>
          </lu>
        </nav>
      )}

      <div className="overlay-menu"></div>

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