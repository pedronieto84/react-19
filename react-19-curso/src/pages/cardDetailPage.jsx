import {useParams} from 'react-router-dom';
import data from '../mock-data/mock-data.js';
import CardDetailComponent from '../components/cardDetailComponent';


export default function CardDetailPage() {
    const { id } = useParams();

    // Cargo el doc con el id que me llega por parámetro
    // En realidad aquí se debería hacer una llamada a la API correspondiente
    // O cargar la data de otra forma, pero para simplificar, lo hago así

    const myDoc = data.find( ( each ) => {
         return each.id === parseInt(id)
    })
    console.log('myDOc', myDoc);

    return (
        <>
        <CardDetailComponent 
         title={ myDoc.title }
         id={ myDoc.id }
         tags={ myDoc.tags }
         info={ myDoc.info }
         img={ myDoc.img }
         />
      </>
    )
  }