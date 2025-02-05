import { db} from './firebaseConfig';
import { collection, addDoc, setDoc, doc} from 'firebase/firestore';

// Método que crea un documento en una colección, sin importarnos el ID

export const addDocWithoutId = async (url ,data: any) =>{
    return await addDoc(collection(db, url), data);
}

// Método que crea o sete un documento en una colección cuando si necesitamos el ID
export const addDocWithId = async (database:string, id: string, data: any) =>{
    return await setDoc(doc(db, database, id), data);
}



// Método que carga colección de documentos ordenadno por un campo