import "./Expertise.css"
import Ponto from './Ponto'
import {
 
} from "react-icons/di"
import {
  SiTypescript,
  SiSass,
  SiFigma,
  SiReact,
  SiGithub,
  SiJavascript,
 
} from "react-icons/si"

const technologies = [
  {id: "js", name: "JavaScript", icon: <SiJavascript/>, description: "A linguagem que me cativou por sua versatilidade, dinamismo e sua amplitude para diversas aplicações."},
  {id: "typescript", name: "TypeScript", icon: <SiTypescript/>, description: " Estou me dedicando em aprender mais sobre pois acredito ser uma escolha valiosa para projetos mais robustos e ser uma base confiavel em cima do JavaScript."},
  {id: "react", name: "React", icon: <SiReact/>, description: " O framework de JS que mais utilizei nos projetos até o momento, utilizando principalmente o Vite como sistema de construção de projetos JS (bundler)."},
  {id: "sass", name: "Sass", icon: <SiSass/>, description: " Considero uma evolução do CSS e gosto muito dos seus recursos como mixins, funções e na sua organização e melhoria da produtividade."},
  {id: "github", name: "GitHub", icon: <SiGithub/>, description: " Uso o GitHub para hospedar meus projetos pessoais e contribuições em projetos de código aberto."},
  {id: "figma", name: "Figma", icon: <SiFigma/>, description: " Estou me dedicando em melhorar meus conhecimentos no figma desenvolvendo elementos de design, incluindo cores, tipografia, espaçamento e dimensões dos meus projetos."}
]

function TechnologiesContainer() {

  return <section className="tecnologies-container">
      <div className="technologies-grid">
      {technologies.map((tech) =>(

          <div className="technology-card" id={tech.id} key={tech.id}>
           
            <div className="icon">{tech.icon}</div>
              
              <div className="technology-info">
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
              </div>

          </div>
      ))}
      </div>
    </section>
}

const Expertise = () => {
  return (
    <div className="tela-expertise">
        <h2>Minhas especialidades<Ponto/></h2>
        <TechnologiesContainer/>
        
    </div>

    
  )
}

export default Expertise



