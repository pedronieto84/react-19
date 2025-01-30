import React from 'react'
import { ChildProps } from '../interfaces/interfaces'

const ComponenteHijo: React.FC<ChildProps> = ({person})=>{

    return (
        <>
        <h1>hola soy el hijo</h1>
        <p>Nombre: {person.name}</p>
        <p>Edad: {person.age}</p>
        </>
    )
}

export default ComponenteHijo