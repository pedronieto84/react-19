
import './App.css'
import ComponenteHijo from './components/componenteHijo'
import {  ChildProps } from './interfaces/interfaces'
import React from 'react'

const  App: React.FC = () => {
 
  const personData: ChildProps = {
    person:{
      name: 'Jhon',
      age: 25
    }
  }

  return (
    <>
    <h1>Componente padre</h1>
    <ComponenteHijo person={personData.person} />
    </>
  )
}

export default App
