/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {
    
    constructor(props) {    
        super(props)
        this.state = {
            value: 0
        }
        console.log('constructor', this.state);
    }

    static getDerivedStateFromProps(props) {
        console.log('getDerivedStateFromProps', props);
        return {value: props.value * 3};
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if(nextProps.value === nextState.value) {
            console.log('not update');
            return false
        }
        else
        {
            console.log('update');
            return true
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return null
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

    componentDidUpdate(prevProps, prevState) {
          console.log('component did update', prevProps, prevState);
    }
    
    componentDidMount() {
          console.log('component did mount')
      }
    
    }

export default ClassComponent