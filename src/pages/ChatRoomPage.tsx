import {useParams} from 'react-router-dom';
import { FirebaseUserWithId, ChatRoomUbicationPersons } from '../types/globalTypes';
import { useState, useEffect} from 'react';
import { useGetChatRoomPositions } from '../hooks/getChatRoomPositions';


import {auth} from '../hooks/firebaseConfig';

function ChatRoomPage() {

    const {id} = useParams<{id: string}>() 
    const authId = auth.currentUser?.uid as string
    const [chatRoomIds, setChatRoomIds] = useState<ChatRoomUbicationPersons>(useGetChatRoomPositions(id as string, authId));
    
    
       return ( 
    <div>
<p>{chatRoomIds.contrarioId}   {chatRoomIds.miId}</p>
    </div> );
}

export default ChatRoomPage;