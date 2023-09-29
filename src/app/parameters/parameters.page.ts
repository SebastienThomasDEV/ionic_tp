import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {users} from "../users/users";
import {NavPage} from "../nav/nav.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavPage]
})
export class ParametersPage implements OnInit {

  user!: any;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    // recuperation de l'id de l'utilisateur connecté
    const userId = localStorage.getItem('userId');
    // recuperation de l'utilisateur connecté (le + permet de caster la chaine de caractere en nombre)
    this.user = users.find((user) => user.id === +userId!);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  clearArticles() {
    let userId = localStorage.getItem('userId')
    localStorage.clear();
    localStorage.setItem('userId', userId!);
    this.router.navigateByUrl('/favorites');
  }

}
