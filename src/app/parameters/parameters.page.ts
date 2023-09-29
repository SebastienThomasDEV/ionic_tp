import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {users} from "../users/users";
import {NavPage} from "../nav/nav.page";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, NavPage]
})
export class ParametersPage implements OnInit {

  user!: any;
  constructor() { }

  ngOnInit() {
    // recuperation de l'id de l'utilisateur connecté
    const userId = localStorage.getItem('userId');
    // recuperation de l'utilisateur connecté (le + permet de caster la chaine de caractere en nombre)
    this.user = users.find((user) => user.id === +userId!);
  }

  logout() {
    localStorage.clear();
    window.location.href = '/home';
  }

  clearArticles() {
    let userId = localStorage.getItem('userId')
    if (userId) {
      localStorage.clear();
      localStorage.setItem('userId', userId!);
    }
  }

}
