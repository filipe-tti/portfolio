import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {
  return (
    <div className="tela-navbar">

    <div className="logo">

      <a href="#">
        <img src="./portfolio/src/img/logo.png" alt="minha logo" />
      </a>
    </div>

    <nav className="menu-desktop"> 


          <nav  className="menu-desktop">

            <lu>

              <AnchorLink className="li" href="#home" offset='100'>Ínicio</AnchorLink>
              <AnchorLink className="li" href="#expertise" offset='100'>Especialidades</AnchorLink>
              <AnchorLink className="li" href="#about" offset='100'>Sobre mim</AnchorLink>
              <AnchorLink className="li" href="#projects" offset='100'>Projetos</AnchorLink>

            </lu>

          </nav>


      </nav>
      <div className="contato-home">
      
      <AnchorLink className='btn-contato' href="#contact">Contato</AnchorLink>
    </div>

   
     

    </div>  

    

  )
}

export default Navbar