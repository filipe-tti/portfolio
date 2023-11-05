import "./Start.css"

const Start = () => {
  return (
 
     <div className="tela-start">
      <div className="info">

        <div className="ft-apresentacao">
            <img className="ft-apresentacao" src="src/img/apresentacao.png" alt="" />
        </div>

        <div className="descricao">
          <h1 className="h1-apresentacao">Desenvolvedor front end<span className="span-ponto">.</span> </h1>
          <p>Bem vindo ao meu portfólio!</p>
        </div>


      </div>

      <div className="contatos">
          <button className="btn">GitHub</button>
          <button className="btn">Whatsapp</button>
          <button className="btn">Linkedin</button>
      </div>

      
     </div>  
    

   

    
  )
}

export default Start
