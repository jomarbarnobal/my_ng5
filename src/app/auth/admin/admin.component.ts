import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
  sumitted: boolean;
  loginForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder
    ){}
  

  ngOnInit() {
       this.sumitted = false
       this.loginForm = this._formBuilder.group({
         email: ['', Validators.required],
         password: ['', Validators.required]
       });
  }

  submit(value: any){
    this.sumitted = true;
    if (!this.loginForm.valid) { return; }
    this._authService.logIn(value.email, value.password).subscribe(
        this._authService.redirectAfterLogin.bind(this._authService),
        this.afterFailedLogin.bind(this)
      )
  }

  afterFailedLogin(errors: any) {
    let parsed_errors = JSON.parse(errors._body).errors;
     for (let attribute in this.loginForm.controls){
       if (parsed_errors[attribute]) {
         this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
       }
     } 
     this.loginForm.setErrors(parsed_errors);
  }

  // signUp() { 
  //   this._tokenService.registerAccount({
  //     email: 'examplar@gmail.com',
  //     password: 'secretpassword',
  //     passwordConfirmation: 'secretpassword'
  //   }).subscribe(
  //     res => console.log(res),
  //     error => console.log(error)
  //   )
  // }
}