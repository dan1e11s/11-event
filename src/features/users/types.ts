export interface User {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  postcode: string;
  province: string;
  telephone: string;
  id?: string;
}

export interface IUsers {
  users: User[];
  currentUser: User | null;
}
