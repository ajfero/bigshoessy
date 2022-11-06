import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  emailField = new FormControl('');
  passwordField = new FormControl('');


  // Metodo post mediante un servicio para mandar al server.


  // Vamos a recibir un Get para obtener el perfil.


  constructor() { }

  ngOnInit(): void {
  }

}
