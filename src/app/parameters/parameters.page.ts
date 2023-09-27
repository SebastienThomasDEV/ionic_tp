import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NavPage} from "../nav/nav.page";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, NavPage]
})
export class ParametersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
