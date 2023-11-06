import "./Navbar.css"



const Navbar = () => {
  return (
    <div className="tela-navbar">

    <div className="logo">

      <a href="#">
        <img src="src/img/logo.png" alt="minha logo" />
      </a>
    </div>

    <nav className="menu-desktop"> 

          <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/expertise">Especialidades</a></li>
              <li><a href="/about">Sobre mim</a></li>
              <li><a href="/projects">Projetos</a></li>
          </ul>
      </nav>
      <div className="contato-home">
      <button className='btn-contato'>Contato</button>
    </div>

   
     

    </div>  

    

  )
}

export default Navbar