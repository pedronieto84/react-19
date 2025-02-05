export type LoginData = {
    email:string
    password:string
}

export interface FirebaseUserWithId  {
    id:string
    email:string
}

export type ChatRoomUbicationPersons={
    miId:string
    contrarioId:string
}

export type UserDatabaseReccord={
    email:string
    sender:string
    length:number
    total:number
    id?:string
}