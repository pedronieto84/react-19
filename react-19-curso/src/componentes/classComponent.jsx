/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {
    
    constructor(props) {    
        super(props)
        this.state = {
            nombre: 'Juan',
        }
    }
    
    render() {
        return (
        <>
           <h1>Componente de Clase</h1>
           <h1>State definido desde el componente de clase {this.state.nombre}</h1>
        </>
        )
      }
}

export default ClassComponent