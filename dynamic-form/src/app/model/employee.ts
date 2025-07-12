export interface Employee {
  id: number;
  name: string;
  emailID: string;
  mobileNo: number;
  skills: { skillId: number; Value: string }[];
  hobbies: { hobbyId: number; Value: string }[];
  address: Address;
}

export interface Address {
  country: string;
  state: string;
  city: string;
  pincode: number;
}
