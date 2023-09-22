import "./ListaOpciones.css"

const ListaOpciones = () => {

//Método map -> arreglo.map( (equipo) => {
    // return <option></option>
//}
   

    const equipos =[
        "Programación", 
        "Front End",
        "Data Science",
        "Devops",
        "UX y DIseño",
        "Móvil",
        "Innovación y Gestión"

    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
           { equipos.map((equipo, index) => {
            return <option key={index}>{equipo}</option>

           })}
        </select>
    </div>
}

export default ListaOpciones