import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginRequestService } from 'src/app/shared/request/login.service';
import { ThisReceiver } from '@angular/compiler';
import { ILoginForm } from 'src/app/shared/models/login.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private req:LoginRequestService
  ) { }
  mensagemErro=false;
  loginForm = this.fb.group({
    email: [' '],
    senha: [' '],
  }) as ILoginForm;
  ngOnInit(): void {
  }

  verificaLogin() {

    this.req.postLogin(this.loginForm.value).pipe(take(1)).subscribe(
      res=> this.OnSucess(), erro=>this.OnError()
    )
  }
  OnSucess() {
    this.auth.setLogin(this.loginForm.value.email)
    this.router.navigate(['home'])
  }
  OnError(){
    this.mensagemErro = true;
  }
}
