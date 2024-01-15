import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./Formulario"
import SocialButton from "./SocialButtton"
import Alert from "./Alert"
import './Registro.css'
import faceLogo from '/facebook.svg'
import githubLogo from '/github.svg'
import inLogo from '/linkedin-in.svg'


const Registro = () => {
  return (
    <>
    <h1>Crea una cuenta</h1>
    <section>
    <SocialButton icon={faceLogo}/>
    <SocialButton icon={githubLogo}/>
    <SocialButton icon={inLogo}/>
    </section>
    <Formulario/>
    <Alert/>
    </>
  )
}

export default Registro