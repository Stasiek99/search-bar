export interface User {
  name: string;
  login: string;
  password: string;
  country: string;
  age: number;
  role: 'user' | 'admin';
}
