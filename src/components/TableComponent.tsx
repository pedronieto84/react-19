import Table from "react-bootstrap/Table";
import { User } from "./../types/types";

function TableComponent({ data }: { data: User[] }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Age</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person: User) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;
