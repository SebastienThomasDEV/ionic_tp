import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from '@angular/router';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  constructor() {}
}
