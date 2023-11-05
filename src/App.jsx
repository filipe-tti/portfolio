//CSS
import './App.css'
//REACT
import { useState } from 'react'
//COMPONENTS
import Start from './components/Start'
import Projects from './components/Projects'
import About from './components/About'
import Expertise from './components/expertise'


const paginas = [
  {id: 1, name: "start"},
  {id: 2, name: "expertise"},
  {id: 3, name: "about"},
  {id: 4, name: "projects"},
]

function App() {

  
  //USE state que armazena a pagina que está
  const [paginaStage, setPaginaStage] = useState(paginas[0].name)

  // função que entra na pagina inicial
  const startWindow = () => {
      setPaginaStage(paginas[0].name)
  }

  // função que entra na pagina de expertise
  const expertiseWindow = () => {
    setPaginaStage(paginas[1].name)
  }

  // função que entra na pagina sobre mim
  const aboutWindow = () => {
    setPaginaStage(paginas[2].name)
  }

  // função que entra na pagina de projetos
  const projectsWindow = () => {
    setPaginaStage(paginas[3].name)
  }

  return (
    <>
      <div className='geral'>
          
      <div className="interface">

        <div className="logo">

          <a href="#">
            <img src="src/img/logo.png" alt="minha logo" />
          </a>
        </div>

        <nav className="menu-desktop"> 

              <ul>
                  <li onClick={startWindow}><a href="#">Inicio</a></li>
                  <li onClick={expertiseWindow}><a href="#">Especialidades</a></li>
                  <li  onClick={aboutWindow }><a href="#">Sobre mim</a></li>
                  <li  onClick={projectsWindow }><a href="#">Projetos</a></li>
              </ul>
          </nav>

          <div className="contato-home">

         

          <button className='btn-contato'>Contato</button>
        </div>

        </div>  

        {paginaStage === 'start' && <Start startWindow={startWindow}/>}
        {paginaStage === 'expertise' && <Expertise expertiseWindow={expertiseWindow}/>}
        {paginaStage === 'about' && <About aboutWindow={aboutWindow}/>}
        {paginaStage === 'projects' && <Projects projectsWindow={projectsWindow}/>}
        
      </div>

      <Expertise/>
     
    </>
  )
}

export default App
