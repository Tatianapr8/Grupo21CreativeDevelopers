import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredentials } from 'src/app/models/user-credentials.model';
import { MD5 } from 'crypto-js';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SecurityService } from 'src/app/services/security.service';
import validation from 'src/app/validations/validations';
import { SessionData } from 'src/app/models/session-data.model';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

constructor(
  private fb: FormBuilder,
  private securityService: SecurityService,
  private localStorageService: LocalstorageService,
  private router: Router
  ) {}

ngOnInit(): void {
  this.CreateForm();
}

CreateForm(){
  this.login_form = this.fb.group({
    email:[
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(GeneralData.EMAIL_MIN_LENGHT),
      ],
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT),
        Validators.maxLength(GeneralData.PASSWORD_MAX_LENGHT),
      ],
    ],
  });
}

get GetForm():{[key: string]: AbstractControl}{
  return this.login_form.controls;
}

Login(){
  if(this.login_form.invalid){
    OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE);    
  }else{
    console.log(JSON.stringify(this.login_form.value, null, 2));
    let email = this.GetForm['email'].value;
    let password = MD5(this.GetForm['password' ].value).toString();
    this.router.navigate(['/home']);
    alert(email);
    alert(password);
    this.securityService.Login(email, password).subscribe({
      next: (data: SessionData) =>{
        console.log(data);
        this.localStorageService.SaveSessionData(data);
        data.isLoggeIn= true;
        this.securityService.RefreshSessionData(data);
        this.router.navigate(['/home']);
      },
      error: (error: any)=>{
        OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE);
      },
    });
  }
}


}
