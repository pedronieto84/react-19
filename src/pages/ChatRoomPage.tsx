import { Link, useParams } from 'react-router-dom';
import { FirebaseUserWithId, ChatRoomUbicationPersons } from '../types/globalTypes';
import { useState, useEffect } from 'react';
import { useGetChatRoomPositions } from '../hooks/getChatRoomPositions';
import { db } from "./../hooks/firebaseConfig";
import { collection, getDocs, onSnapshot, addDoc, orderBy, query, doc, setDoc, increment  } from "firebase/firestore";

import { auth } from '../hooks/firebaseConfig';
import ChatComponent from '../components/ChatComponent';

function ChatRoomPage() {

    const updateMessage = (message) => {
        console.log('capturo e lmensaje del comp hijo', message);
        addData(message);
    }

    const [conversation, setConversation] = useState<{ id: string; email: string }[]>([]);
    // Para gestionar el estado de loading y error
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getChatMessages = async () => {
        try {


            console.log(docs.docs.map(doc => doc.data()));
            setLoading(false);
            console.log("docs", docs);
        } catch (error) {
            console.error("Error adding document:", error);
            setError("Error al cargar los usuarios");
        }
    };

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
            console.log("Document added!");
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };

    const { id } = useParams<{ id: string }>()
    const authId = auth.currentUser?.uid as string
    const [chatRoomIds, setChatRoomIds] = useState<ChatRoomUbicationPersons>(useGetChatRoomPositions(id as string, authId));


    useEffect(() => {
        // Referencia a la colección "users"


        // Suscribirse a los cambios en Firestore

        const conversationCollection = collection(db, `chats/${id}/chatroom`);

        // Crear la consulta con `orderBy` para ordenar por fecha
        //const conversationQuery = query(conversationCollection, orderBy("date", "asc")); // Puedo pedir la query al back o hacerla en front 
        const unsubscribe = onSnapshot(conversationCollection, (snapshot) => {
            const conversation = snapshot.docs.map((doc) => ({

                id: doc.id,
                ...doc.data(),
            }))
            
            console.log('ordeno el array', conversation.sort((a, b) => a.date - b.date));
            setConversation(conversation);
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