export class User{
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public phoneNo:number,
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
