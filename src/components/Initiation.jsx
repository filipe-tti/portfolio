import "./Initiation.css"
import Ponto from './Ponto'


const Initiation = () => {
  return (
 
     <div className="tela-start">
      <div className="info">

        <div className="ft-apresentacao">
            <img src="src/img/apresentacao.png" className="ft-apresentacao" alt="foto perfil" />
        </div>

        <div className="descricao">
          <h1 className="h1-apresentacao">Desenvolvedor front end<Ponto/> </h1>
          <p>Bem vindo ao meu portfólio, aqui você encontrará informações sobre mim e meus projetos!</p>
        </div>


      </div>

      
      
     </div>  
    

   

    
  )
}

export default Initiation
