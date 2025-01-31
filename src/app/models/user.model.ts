
// export enum Role {
//   ADMIN = 'Admin',
//   USER = 'User',
//   MODERATOR = 'Moderator'
// }


export interface User {
    id: string;
    name: string;
    email: string;
    isBlocked: boolean;
    // role: Role; 
  }
  