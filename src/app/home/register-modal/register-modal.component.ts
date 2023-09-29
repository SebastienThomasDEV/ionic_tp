import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicModule, IonModal} from "@ionic/angular";
import {OverlayEventDetail} from "@ionic/core/components";
import User from "../../_interfaces/user";
import {registerForm} from "../../_forms/register";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import ApiResponse from "../../_interfaces/apiResponse";
@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RegisterModalComponent  implements OnInit {

  @ViewChild(IonModal) registerModal!: IonModal;
  registerForm = registerForm;
  constructor(private readonly authService: AuthService) { }

  ngOnInit() {}


  action(role: string, data?: any) {
    this.registerModal.dismiss(data, role);
  }

  confirm(event: Event) {
    const e = event as CustomEvent<OverlayEventDetail<string>>;
    if (e.detail.role === 'confirm') {
      const user: User = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!
      }
      this.authService.register(user);
      registerForm.reset();
    }
  }

}
