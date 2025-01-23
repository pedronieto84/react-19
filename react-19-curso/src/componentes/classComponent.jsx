/* eslint-disable react/prop-types */
import * as React from "react"

class ClassComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor', props)
    }
    render() {
        return (
        <>
            <h1>Class Component</h1>
            <h2>Props Variable: {this.props.propsClass1}</h2>
            <h2>Props String: {this.props.propsClass2String}</h2>
            <h2>Props Number: {this.props.PropsClass3Number}</h2>
            <h2>Props Object: {this.props.propsClass4Object.nombre}</h2>
        </>
        )
      }
}

export default ClassComponent