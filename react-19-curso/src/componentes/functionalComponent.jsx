// Uso de useId
import {  useId } from "react";

function EmailInput({name}) {

  const id= useId()
  console.log('id', id);
  return (
    <>
    <label htmlFor={id}>{name}</label>
    <input id={id} type="email" />
    </>
  )
}

const FunctionalComponent = () => {
  
  return (
    <>
      <h1>Componente Funcional</h1>
      <EmailInput name="Email" />
      <br />
      <br />

      <EmailInput name="Confirm Email" />
    </>
  )
}

export default FunctionalComponent;

