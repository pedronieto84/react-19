//import GraphQlComponent from "../components/GraphQlComponent"
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";
import { useState } from "react";


// Hacer consultas graphql dinamicas
const fields = ["code", "name", "currency"];

const GET_COUNTRY_DATA = gql`
    query {
    countries {
        ${fields.join("\n")}
    }
    }
    `;

// MUTATION para crear usuario
const CREATE_USER = gql`
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}
`;

// SUBSCRIPTION para recibir nuevos usuarios en tiempo real
const USER_CREATED = gql`
subscription {
  userCreated {
    id
    name
    email
  }
}
`;



const GraphQlPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  // Escucha nuevos usuarios en tiempo real
  const { data } = useSubscription(USER_CREATED);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({ variables: { name, email } });
    setName("");
    setEmail("");
  };
  


  // Render the data
  return (
    <>

      <div>
        <h2>Registro de Usuarios</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Crear Usuario</button>
        </form>

        <h3>Usuarios Recientes</h3>
        {data && (
          <p>
            <b>{data.userCreated.name}</b> ({data.userCreated.email}) acaba de registrarse.
          </p>
        )}
      </div>


    </>
  );
}

export default GraphQlPage