import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicModule, IonModal} from "@ionic/angular";
import {loginForm} from "../../_forms/login";
import {OverlayEventDetail} from "@ionic/core/components";
import User from "../../_interfaces/user";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import ApiResponse from "../../_interfaces/apiResponse";
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModalComponent  implements OnInit {
  @ViewChild(IonModal) loginModal!: IonModal;
  loginForm = loginForm;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit() {}

  login(user: User) {
    this.authService.login(user).subscribe((data: ApiResponse) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      } else {
        console.log(data.error);
      }
    });
  }

  action(role: string, data?: any) {
    this.loginModal.dismiss(data, role);
  }

  confirm(event: Event) {
    const e = event as CustomEvent<OverlayEventDetail<string>>;
    if (e.detail.role === 'confirm') {
      const user: User = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }
      this.login(user);
      loginForm.reset();
    }
  }

}
