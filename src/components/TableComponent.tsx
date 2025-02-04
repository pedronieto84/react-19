import Table from "react-bootstrap/Table";
import { User } from "./../types/types";

function TableComponent({
  data,
  columns,
}: {
  data: User[];
  columns: string[];
}) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{item[column] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;
