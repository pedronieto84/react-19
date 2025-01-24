/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {
    
    constructor() {    
        super()
        
        this.state = {
            value: 1
        }
        console.log('constructor', this.state);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
        return null;
    }

    render() {
        console.log('render')
        return (
        <>
           <h1>Componente de Clase</h1>
           <h1>State definido desde el componente de clase {this.state.value}</h1>
        </>
        )
      }

      componentDidMount() {
        console.log('component did mount')
    }
}

export default ClassComponent