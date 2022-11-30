import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
    ){

  }
  canActivate(): boolean{

    if(this.auth.verificaLogado()){
      return true
    }else{
      this.router.navigate(['login'])
    }
    return false
  }

}
