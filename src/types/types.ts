export type User = {
    id: number;
    name: string;
    age: number;
    email: string;
}

export type FlexibleObjectTable = {
    [key: string]: string | number | boolean;
}