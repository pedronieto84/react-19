//import GraphQlComponent from "../components/GraphQlComponent"
import { gql, useQuery } from "@apollo/client";

// Define your GraphQL query
const GET_COUNTRIES = gql`
  query {
  countries {
    code
    name
    capital
    currency
  }
}
`;
// Hacer consultas graphql dinamicas
const fields = ["code", "name",  "currency"];

const GET_COUNTRY_DATA = gql`
    query {
    countries {
        ${fields.join("\n")}
    }
    }
    `;


const GraphQlPage = () => {const { loading, error, data } = useQuery(GET_COUNTRY_DATA);

// Handle loading state
if (loading) return <p>Loading...</p>;

// Handle error state
if (error) return <p>Error: {error.message}</p>;

// Render the data
return (
 
    <div>
      <h1>Países del Mundo</h1>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            <strong>{country.name}</strong> ({country.code}) - Capital:{" "}
            {country.capital}, Moneda: {country.currency}
          </li>
        ))}
      </ul>
    </div>
);
}

export default GraphQlPage