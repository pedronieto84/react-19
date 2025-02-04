import TableComponent from "../components/TableComponent";
import { FlexibleObjectTable } from "./../types/types";
import { getKeysFromArrayOfObjects }  from "../hooks/getKeysFromArrayOfObjects";
import { useEffect, useState } from "react";

function TablePage() {
  const data: FlexibleObjectTable[] = [
    { id: 1, name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { id: 2, name: "María Gómez", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos López", age: 28, email: "carlos@example.com" },
    { id: 4, name: "Ana Martínez", age: 22, email: "ana@example.com" },
  ];

  
  

  const columns:string[] = getKeysFromArrayOfObjects(data);

  return (
    <>
      <h1 className="card">Tablas</h1>
      <TableComponent data={data} columns={columns} />
    </>
  );
}

export default TablePage;
