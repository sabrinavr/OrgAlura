import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {
    const manejarEnvio = (e) => {
        e.preventDefault()

        console.log("Manejar el envío",e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar url a foto" required/>
            <ListaOpciones />
            <Boton texto="Crear Colaborador"/>

        </form>
    </section>
}

export default Formulario