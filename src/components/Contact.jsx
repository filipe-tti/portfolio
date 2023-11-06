import "./Contact.css"
const Contact = () => {
  return (
    <div className="tela-contact">
   
        <h2>Meus contatos<span className="pont">.</span></h2>

            <div className="contact-content">
                <a target="_blank" rel="noreferrer" className="btn-contact" href='https://github.com/filipe-tti'>Github</a>
               
                <a target="_blank" rel="noreferrer" className="btn-contact" href="https://www.linkedin.com/in/filipe-x-/" >Linkedin</a>
                
                <a target="_blank" rel="noreferrer"  className="btn-contact" href="https://wa.me/5547996655148?text=Ol%C3%A1%21"  >Whatsapp</a>
            </div>

    </div>
  )
}

export default Contact