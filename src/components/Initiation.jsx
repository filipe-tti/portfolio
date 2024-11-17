import "./Initiation.css"
import Ponto from './Ponto'


import apresentacao from '../img/apresentacao.png'

const logoApresentacao = [apresentacao]

const Initiation = () => {
  return (
 
     <div className="tela-start">
      <div className="info">

        <div className="ft-apresentacao">
            <img src={logoApresentacao} className="ft-apresentacao" alt="foto perfil" />
        </div>

        <div className="descricao">
          <h1>Desenvolvedor front end<Ponto/> </h1>
          <p>Bem vindo ao meu portfólio, aqui você encontrará informações sobre mim e meus projetos!</p>
        </div>


      </div>

      
      
     </div>  
    

   

    
  )
}

export default Initiation
