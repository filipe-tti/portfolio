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
             <h2>Previsão do Tempo</h2>
             <h3>JS/REACT</h3>
             <p>Previsão do tempo na semana desenvolvido atraves da API da openweather</p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/react-previsao">Repositório</a>
                <a target="_blank" rel="noreferrer" href="https://filipe-tti.github.io/react-previsao/">Link</a>
              </div>

          </div>
        </div>

        <div className="card">
          <div className="content">
             <h2>Loja Virtual</h2>
              <h3>JS/REACT</h3>
              <p>Loja virtual ...</p>

              <div className="links">

                <a target="_blank" rel="noreferrer" href="https://github.com/filipe-tti/loja-react">Repositório</a>
                <a target="_blank" rel="noreferrer" href="https://filipe-tti.github.io/loja-react/">Link</a>
              </div>

          </div>
        </div>

                  
               



                 
                  
                  



        </div>

    </div>
  )
}

export default Projects
