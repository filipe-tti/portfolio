import { useState,useEffect,useRef } from "react"
import Ponto from './Ponto'
import "./About.css"
import {motion} from 'framer-motion'

import filipe01 from '../img/filipe01.jpg'
import filipe02 from '../img/filipe02.jpg'
import filipe03 from '../img/filipe03.jpg'
import filipe04 from '../img/filipe04.jpg'

const imgs = [filipe01,filipe02,filipe03,filipe04]

const About = () => {

  const carousel = useRef()
  const [width,setWidth] = useState(0)

  useEffect(() => {
     console.log (carousel.current?.scrollWidth,carousel.current?.offsetWidth)
     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="tela-about">

      <div className="conteudo">

      
             <h2>Sobre mim<Ponto/></h2>
     

           <p>Dedicado á aprender e praticar a programação buscando sempre mais conhecimento e experiencia, sou cativado pelo front-ent onde consigo usar minha criativade e organização para evoluir meus codigos. Nesse momento estou focado em aperfeiçoar minhas habilidades em JS com React criando interfaces dinamicas e organizadas em componentes, assim como aperfeiçoar minha estilização no CSS e criação de interfaces no Figma. Tenho como objetivo evoluir meus conhecimentos em Typescript,SASS e Tailwind CSS a curto prazo e seguindo apaixonado pelo processo da busca de conhecimento contínuo.</p>


           <div className="images">

            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}} initial={{x:100}} animate={{x:0}} >
              <motion.div className="inner" drag="x" dragConstraints={{right:0, left: -width}} transition={{duration: 0.8}}>
                  {imgs.map(image => (
                      <motion.div className="item" key={image}> 
                        <img src={image} alt="texto alt"/>

                        </motion.div>
                  ))}
              </motion.div>
                    
            </motion.div>  
            

            

           </div>
         
          
      </div>
        
    </div>
  )
}

export default About