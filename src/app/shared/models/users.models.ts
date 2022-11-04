import { Address } from "./address.module";

export interface user {
  address: Address;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  idNumber: string;
  birthDate: Date;
  status: number
}
