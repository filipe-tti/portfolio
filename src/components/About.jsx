import { useState,useEffect,useRef } from "react"
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

      
             <h2>Sobre mim<span className="pont">.</span></h2>
     

           <p>Apaixonado por programação e fascinado por aprender de diferentes maneiras e experiências, sempre buscando conhecimentos que me possibilitam expandir áreas de conhecimento com o objetivo á médio prazo de me tornar um desenvolvedor full stack. Nesse momento estou focado em aperfeiçoar minhas habilidades nas tecnologias de front-end como JavaScript, HTML5 e CSS3, buscando aprimorar através de cursos online e livros que funcionam muito bem comigo pois considero bem didáticos e se torna fluido. </p>


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