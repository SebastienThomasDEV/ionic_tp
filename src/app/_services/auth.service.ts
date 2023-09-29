import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import User from "../_interfaces/user";
import {Observable} from "rxjs";
import {users} from "../users/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // voir dossier users pour les utilisateurs

  login(user: User): any {
    // boolean pour savoir si l'utilisateur est trouvé
    let userFound: boolean = false;
    // utilisateur trouvé
    let userLogged: any;
    // pour chaque utilisateur, on verifie si l'email et le mot de passe correspondent
    users.forEach((u: any) => {
      if (u.email === user.email && u.password === user.password) {
        // si l'utilisateur est trouvé, on le connecte
        userFound = true;
        // on recupere l'utilisateur connecté
        userLogged = u;
      }
    });
    if (userFound) {
      // on stocke l'id de l'utilisateur connecté dans le local storage
      localStorage.setItem('userId', userLogged.id);
    }
  }

  register(user: User): any {
    let userFound: boolean = false;
    // pour chaque utilisateur, on verifie si l'email existe deja
    users.forEach((u: any) => {
      // si l'email existe deja, on ne l'ajoute pas et on connecte l'utilisateur
      if (u.email === user.email) {
        userFound = true;
        this.login(user);
      }
    });
    // si l'email n'existe pas, on ajoute l'utilisateur
    if (!userFound) {
      users.push({
        id: users.length + 1,
        email: user.email,
        password: user.password,
        feeds: []
      });
    }
  }
}
