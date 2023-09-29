import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const AuthGuard = () => {
  const router = inject(Router);
  // si l'utilisateur n'est pas connecté, on le redirige vers la page d'accueil
  if(localStorage.getItem('userId') === null) {
    router.navigateByUrl('/home')
  }
}
