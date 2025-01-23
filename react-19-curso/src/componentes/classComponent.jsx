/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {
    
    pasarHijoAPadre = (data) => {
        this.props.recibirDatosDeHijo(data)
    }
    render() {
        return (
        <>
            <h1>Class Component</h1>
            <input type="text" onChange={(e) => this.pasarHijoAPadre(e.target.value)} />
        </>
        )
      }
}

export default ClassComponent