import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  loginUsuario = { login: 'teste@teste.com', senha: '123' }
  loginAdm = { login: 'adm@adm.com', senha: '123' }
  mensagemErro = false;

  loginForm = this.fb.group({
    login: (''),
    senha: (''),
  });


  ngOnInit(): void {
    if(this.auth.verificaLogado()){
      this.router.navigateByUrl("/home");
    }
  }

  verificaLogin() {
    if (this.loginUsuario.login == this.loginForm.value.login && this.loginUsuario.senha == this.loginForm.value.senha) {
      this.auth.setLogin(this.loginForm.value.login)
      this.router.navigate(['home'])
    } else if(this.loginAdm.login == this.loginForm.value.login && this.loginAdm.senha == this.loginForm.value.senha) {
      this.auth.setLogin(this.loginForm.value.login)
      this.auth.setAdm(this.loginForm.value.login)
      this.router.navigate(['home'])
    } 
    else {
      this.mensagemErro = true;
    }
  }
}
