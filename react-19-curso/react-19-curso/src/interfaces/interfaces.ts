export interface UserProps{
    name: string;
    age: number;
}

export interface ChildProps{
    person: UserProps;
}