import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataref : any = collection(this.firestore, 'Users')


  constructor(private firestore : Firestore) {}


  async addUser(user: User): Promise<void> {
    const response = await addDoc(this.dataref, user);
    // console.log(response);
  }


  async getUsers(): Promise<User[]> {
    const querySnapshot = await getDocs(this.dataref)
    const users : User[] = await querySnapshot.docs.map((doc)=>{
      let user : any = doc.data();
      user.id=doc.id;
      return user
    })
    return users;
  }

  
  async getUserById(id: string): Promise<User | undefined> {
    const datarefById : any = doc(this.firestore, `Users/${id}`)
    const userSnapshot = await getDoc(datarefById);
    if (userSnapshot.exists()) {
      let user : any  = userSnapshot.data();
      user.id= userSnapshot.id;
      return user;
    } else {
      console.log("Utilisateur non trouvé");
    }
    return;
  }

  
  async updateUser(updatedUser: User): Promise<void> {
    const datarefUpdate : any = doc(this.firestore, `Users/${updatedUser.id}`)
    const querySnapshot = await updateDoc(datarefUpdate,updatedUser);
    // console.log(querySnapshot);
  }


  async deleteUser(userId: string): Promise<void> {
    const datarefToDeleter : any = doc(this.firestore, `Users/${userId}`)
    const querySnapshot = await deleteDoc(datarefToDeleter);
    // console.log(querySnapshot);
  }
}
