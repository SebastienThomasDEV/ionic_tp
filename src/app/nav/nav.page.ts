import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav',
  template: `
      <ion-toolbar>
          <ul class="flex w-full justify-around items-center">
              <li>
                  <ion-icon
                          name="home-outline"
                          routerLink="/dashboard"
                          [className]="router.url === '/dashboard' ? 'text-yellow-600 text-3xl cursor-pointer' : 'text-3xl cursor-pointer'">
                  </ion-icon>
              </li>
              <li>
                  <ion-icon
                          name="bulb-outline"
                          routerLink="/feed"
                          [className]="router.url === '/feed' ? 'text-yellow-600 text-3xl cursor-pointer' : 'text-3xl cursor-pointer'">
                  </ion-icon>
              </li>
              <li>
                  <ion-icon
                          name="home-outline"
                          routerLink="/dashboard"
                          [className]="router.url === '/feed' ? 'text-yellow-600 text-3xl cursor-pointer' : 'text-3xl cursor-pointer'">

                  </ion-icon>
              </li>
              <li>
                  <ion-icon
                          name="cog-outline"
                          routerLink="/parameters"
                          [className]="router.url === '/parameters' ? 'text-yellow-600 text-3xl cursor-pointer' : 'text-3xl cursor-pointer'">
                  </ion-icon>
              </li>
          </ul>
      </ion-toolbar>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class NavPage implements OnInit {

  constructor(public readonly router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

}
