import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParametersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
