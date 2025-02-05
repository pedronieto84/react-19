import { Link, useParams } from 'react-router-dom';
import {  ChatRoomUbicationPersons } from '../types/globalTypes';
import { useState, useEffect, SetStateAction } from 'react';
import { useGetChatRoomPositions } from '../hooks/getChatRoomPositions';
import { db } from "./../hooks/firebaseConfig";
import { collection, onSnapshot, addDoc,  doc, setDoc, increment, orderBy, query  } from "firebase/firestore";

import { auth } from '../hooks/firebaseConfig';
import ChatComponent from '../components/ChatComponent';

function ChatRoomPage() {

    const updateMessage = (message) => {
       
        addData(message);
    }

    const [conversation, setConversation] = useState<{ id: string ;text: string; sender: string; date: number }[]>([]);
    // Para gestionar el estado de loading y error
    const [loading, setLoading] = useState<boolean>(true);
    const [error] = useState<string | null>(null);

    

    const addData = async (objectOfConversation) => {

        try {
            await addDoc(collection(db, `chats/${id}/chatroom`), objectOfConversation);
            const docRef = doc(db, "stats", 'globalStats');

            const length = objectOfConversation.text.length;
            const sender = objectOfConversation.sender === auth.currentUser?.uid ? 1 : 0;
            const total = 1
            // Usar setDoc para guardar el objeto
            await setDoc(docRef, {length: increment(length), sender:increment(sender), total:increment(total)}, { merge: true });

            // Updateo solo mis campos
            const miId = auth.currentUser?.uid as string
            const docRefUser = doc(db, `users`, miId);
            await setDoc(docRefUser, {length: increment(length), sender:increment(sender), total:increment(total)}, { merge: true });
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };

    const { id } = useParams<{ id: string }>()
    const authId = auth.currentUser?.uid as string
    const [chatRoomIds] = useState<ChatRoomUbicationPersons>(useGetChatRoomPositions(id as string, authId));


    useEffect(() => {
        // Referencia a la colección "users"


        // Suscribirse a los cambios en Firestore

        const conversationCollection = collection(db, `chats/${id}/chatroom`);

        // Crear la consulta con `orderBy` para ordenar por fecha
        const conversationQuery = query(conversationCollection, orderBy("date", "asc")); // Puedo pedir la query al back o hacerla en front 
        const unsubscribe = onSnapshot(conversationQuery, (snapshot) => {
            const charla = snapshot.docs.map((doc) => ({

                id: doc.id,
                ...doc.data() as { text: string; sender: string; date: number },
            }))
            
            //const conv = conversation.sort((a,b)=>(a.date - b.date)) as any
            setConversation(charla);
            setLoading(false);

        });

        // Cleanup: Desuscribirse al desmontar el componente
        return () => unsubscribe();
    }, []);


    if (loading) return <div className='card'>Cargando...</div>;
    if (error) return <div className='card'>{error}</div>;
    return (
        <div>
            <p>{chatRoomIds.contrarioId}   {chatRoomIds.miId}</p>
            <ChatComponent conversation={conversation} updateMessage={updateMessage} />
            <div className="d-flex justify-content-center mt-3">

                <Link to="/hall">Volver al Hall</Link>

            </div>
        </div>);
}

export default ChatRoomPage;