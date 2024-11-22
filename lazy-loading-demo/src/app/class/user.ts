export class User{
    constructor(
        public name:string,
        public email:string,
        public phoneno:number,
        public address: {
            street: string;
            city: string;
            state: string;
            postalCode: number;
          },
          public hobbies:string,
        public gender:string,
        public subscribe:boolean
    ){};
}
