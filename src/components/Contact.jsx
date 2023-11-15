import "./Contact.css"
import Ponto from './Ponto'

import {
  SiGmail,
  SiWhatsapp,
  SiLinkedin,
  SiGithub,

  
 
} from "react-icons/si"


import {

  MdFileDownload,
  
 
} from "react-icons/md"

const Contact = () => {
  return (
    <div className="tela-contact">
   
        <h2>Meus contatos<Ponto/></h2>

            <div className="contact-content">


              <div className="contacts">
                <a target="_blank" rel="noreferrer"  id="email" href="mailto:filipe18tti@gmail.com?subject=&body="><SiGmail/></a>
                <p>Email</p>
              </div>

              <div className="contacts">
                <a target="_blank" rel="noreferrer"  id="wpp" href="https://wa.me/5547996655148?text=Ol%C3%A1%21"><SiWhatsapp/></a>
                <p>Whatsapp</p>
              </div>

              <div className="contacts">
                <a target="_blank" rel="noreferrer"  id="linkedin" href="https://www.linkedin.com/in/filipe-x-/"><SiLinkedin/></a>
                <p>Linkedin</p>
              </div>

              <div className="contacts">
                <a target="_blank" rel="noreferrer"  id="github" href="https://github.com/filipe-tti"><SiGithub/></a>
                <p>Github</p>
              </div>

              <div className="contacts">
                <a target="_blank" rel="noreferrer"  id="cv" href="https://drive.google.com/drive/folders/126Dio_1q-Y9JR39TkbYC3BMggSw3wuTq"><MdFileDownload/></a>
                <p>Baixar CV</p>
              </div>


            </div>

            

           
            
      

    </div>
  )
}

export default Contact