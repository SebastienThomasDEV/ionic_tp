import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from '@angular/router';
import {CommonModule} from "@angular/common";
import {AuthService} from "../_services/auth.service";
import { IonModal } from '@ionic/angular';
import User from '../_interfaces/user';
import Response from "../_interfaces/response";
import {registerForm} from "../_forms/register";
import { OverlayEventDetail } from '@ionic/core/components';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {Observable} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  registerForm = registerForm;
  constructor(
    private readonly authService: AuthService
  ) {}

  login() {
    this.authService.authenticate('test', 'test').subscribe((data) => {
        console.log(data);
    });
  }

  register(user: User) {
    this.authService.register(user).subscribe((data: Observable<Response>) => {
        console.log(data);
    });
  }

  action(role: string, data?: any) {
    this.modal.dismiss(data, role);
  }

  onWillDismiss(event: Event) {
    const e = event as CustomEvent<OverlayEventDetail<string>>;
    if (e.detail.role === 'confirm') {
      const user: User = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!
      }
      this.register(user);
      registerForm.reset();
    }
  }

}
