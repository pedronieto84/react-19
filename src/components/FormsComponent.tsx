import { useForm } from "react-hook-form";
import { Form, Button, Container, Alert } from "react-bootstrap";

function FormsComponent(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulario enviado correctamente");
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Formulario con React Hook Form y Bootstrap</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo: Nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", { required: "El nombre es requerido" })}
            isInvalid={!!errors.nombre}
          />
          {errors.nombre && (
            <Form.Control.Feedback type="invalid">
              {errors.nombre.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        {/* Campo: Edad */}
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa tu edad"
            {...register("edad", {
              required: "La edad es requerida",
              min: { value: 18, message: "Debes ser mayor de 18 años" },
            })}
            isInvalid={!!errors.edad}
          />
          {errors.edad && (
            <Form.Control.Feedback type="invalid">
              {errors.edad.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        {/* Campo: Correo electrónico */}
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("correo", {
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico no válido",
              },
            })}
            isInvalid={!!errors.correo}
          />
          {errors.correo && (
            <Form.Control.Feedback type="invalid">
              {errors.correo.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        {/* Campo: Aceptar términos */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Acepto los términos y condiciones"
            {...register("aceptarTerminos", {
              required: "Debes aceptar los términos y condiciones",
            })}
            isInvalid={!!errors.aceptarTerminos}
          />
          {errors.aceptarTerminos && (
            <Form.Control.Feedback type="invalid">
              {errors.aceptarTerminos.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        {/* Botón de envío */}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );

}

export default FormsComponent