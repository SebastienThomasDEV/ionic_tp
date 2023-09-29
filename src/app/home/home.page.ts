import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from "@angular/common";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {RegisterModalComponent} from "./register-modal/register-modal.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    LoginModalComponent,
    RegisterModalComponent
  ],
})
export class HomePage {

  constructor(private readonly router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userId') !== null) {
      this.router.navigateByUrl('/dashboard');
    }
    localStorage.clear();
  }
}
