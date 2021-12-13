import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validation from '../../../validations/validations';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password_update: FormGroup = new FormGroup({
    password: new FormControl(''),
    comfirmPassword: new FormControl('')
});

submitted = false;

constructor(private formBuilder: FormBuilder) { }

ngOnInit(): void {
  this.password_update= this.formBuilder.group({
  password: ['', [Validators.required, Validators.minLength(8)]],
  comfirmPassword: ['', [Validators.required]]
  },
  {
    validator:[validation.match('password', 'comfirmPassword')]
  }
  );
} 

get f():{[key: string]: AbstractControl}{
  return this.password_update.controls;
}

onSubmit(): void{
  this.submitted =true;
  if(this.password_update.invalid){
    return;
  }
  console.log(JSON.stringify(this.password_update.value, null, 2));
  // alert("Usuario autenticado" + this.form.value.email);
}

onReset(): void {
  this.submitted=false;
  this.password_update.reset();
}

}
