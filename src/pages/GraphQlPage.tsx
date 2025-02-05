//import GraphQlComponent from "../components/GraphQlComponent"
import { gql, useQuery } from "@apollo/client";

// Define your GraphQL query
const GET_LAUNCHES = gql`
  query {
  countries {
    code
    name
    capital
    currency
  }
}
`;


const GraphQlPage = () => {const { loading, error, data } = useQuery(GET_LAUNCHES);

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