/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {
   
    render() {
        console.log('render')
        return (
        <>
           <h1>Componente de Clase</h1>
           <h1>State definido desde el componente de clase {this.state.value}</h1>
        </>
        )
      }
    
      
    componentWillUnmount(){
              console.log('component will unmount');
          }
    }

export default ClassComponent