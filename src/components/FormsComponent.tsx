import { useForm } from "react-hook-form";

function FormsComponent(){
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre", { required: true })} placeholder="Nombre" />
      {errors.nombre && <p>El nombre es requerido</p>}
      <input {...register("edad", { required: true, min: 18 })} placeholder="Edad" type="number" />
      {errors.edad && <p>Debes ser mayor de 18 años</p>}
      <button type="submit">Enviar</button>
    </form>
    
</>
  );

}

export default FormsComponent