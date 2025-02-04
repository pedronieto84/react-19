import TableComponent from "../components/TableComponent"
import { User } from './../types/types'

function TablePage() {

  const data: User[] = [
    { id: 1, name: 'Juan Pérez', age: 25, email: 'juan@example.com' },
    { id: 2, name: 'María Gómez', age: 30, email: 'maria@example.com' },
    { id: 3, name: 'Carlos López', age: 28, email: 'carlos@example.com' },
    { id: 4, name: 'Ana Martínez', age: 22, email: 'ana@example.com' },
  ];
 

    return (
      <>
       <h1 className='card'>Tablas</h1>
       <TableComponent data={data}/>
      </>
    )
  }
  
  export default TablePage