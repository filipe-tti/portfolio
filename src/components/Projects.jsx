import "./Projects.css"
import Ponto from './Ponto'

const Projects = () => {
  return (
    <div className="tela-projects">
      
        
      <h2>Meus projetos<Ponto/></h2>

      <div className="container">

        <div className="card">
          <div className="content">
             <h2>Secret Word</h2>
              <h3>JS/REACT</h3>
              <p>Jogo que desafia os jogadores a adivinharem uma palavra oculta.</p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/secret-word">Repositório</a>
                <a target="_blank" rel="noreferrer" href="https://filipe-tti.github.io/secret-word/">Link</a>
              </div>

          </div>
        </div>

        <div className="card">
          <div className="content">
             <h2>Quiz JS</h2>
              <h3>JS/REACT</h3>
              <p>jogo de perguntas e respostas sobre uma série de perguntas beseado em um tópico específico de tecnologia ou comida por exemplo. </p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/quiz-javascript">Repositório</a>
                <a target="_blank" rel="noreferrer" href="https://filipe-tti.github.io/quiz-javascript/">Link</a>
              </div>

          </div>
        </div>

        <div className="card">
          <div className="content">
             <h2>Portfólio</h2>
             <h3>JS/REACT</h3>
             <p>Esse portfólio.</p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/portfolio">Repositório</a>
                <a target="_blank" rel="noreferrer" href="#">Link</a>
              </div>

          </div>
        </div>

        <div className="card">
          <div className="content">
             <h2>Calculadora</h2>
              <h3>JS/REACT</h3>
              <p>Calculadora com desigh do iphone desenvolvida em JS.</p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/calculator">Repositório</a>
                <a target="_blank" rel="noreferrer" href="#">Link</a>
              </div>

          </div>
        </div>

                  
               



                 
                  
                  



        </div>

    </div>
  )
}

export default Projects
