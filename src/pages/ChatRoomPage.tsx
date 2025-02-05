import { useParams } from 'react-router-dom';
import { FirebaseUserWithId, ChatRoomUbicationPersons } from '../types/globalTypes';
import { useState, useEffect } from 'react';
import { useGetChatRoomPositions } from '../hooks/getChatRoomPositions';
import { db } from "./../hooks/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

import { auth } from '../hooks/firebaseConfig';
import ChatComponent from '../components/ChatComponent';

function ChatRoomPage() {

    const [conversation, setConversation] = useState<{ id: string; email: string }[]>([]);
     // Para gestionar el estado de loading y error
     const [loading, setLoading] = useState<boolean>(true);
     const [error, setError] = useState<string | null>(null);

    const getChatMessages = async () => {
        try {
            const docs = await getDocs(collection(db, "chats/a/chatroom"));
            console.log(docs.docs.map(doc => doc.data()));
            setLoading(false);
            console.log("docs", docs);
        } catch (error) {
            console.error("Error adding document:", error);
            setError("Error al cargar los usuarios");
        }
    };

    const { id } = useParams<{ id: string }>()
    const authId = auth.currentUser?.uid as string
    const [chatRoomIds, setChatRoomIds] = useState<ChatRoomUbicationPersons>(useGetChatRoomPositions(id as string, authId));


    useEffect(() => {
        // Referencia a la colección "users"
        const conversationCollection = collection(db, "chats/a/chatroom");

        // Suscribirse a los cambios en Firestore
        const unsubscribe = onSnapshot(conversationCollection, (snapshot) => {
            const conversation = snapshot.docs.map((doc) => ({
                
                id: doc.id,
                ...doc.data(),
            })) 
            console.log('seteo conversacion', conversation);
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
            <ChatComponent conversation={conversation}/>
        </div>);
}

export default ChatRoomPage;