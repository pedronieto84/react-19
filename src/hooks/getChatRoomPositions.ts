import { ChatRoomUbicationPersons } from "../types/globalTypes";

export const useGetChatRoomPositions = (chatRoomId: string, currentUser:string): ChatRoomUbicationPersons => {
    const arrayOfStrings = chatRoomId.split('-');
    const miId = arrayOfStrings.find((string) => string === currentUser) as string
    const contrarioId = arrayOfStrings.find((string) => string !== currentUser) as string

    return {miId, contrarioId}

}