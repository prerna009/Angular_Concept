export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    address: Address;
}

export interface Address {
    city: string;
    country: string;
}
