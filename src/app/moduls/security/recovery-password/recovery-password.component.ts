import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  recovery: FormGroup = new FormGroup({
    email: new FormControl('')
});

submitted = false;

constructor(private formBuilder: FormBuilder) { }

ngOnInit(): void {
  this.recovery= this.formBuilder.group({
  email:  ['', [Validators.required, Validators.email]]
  }
  );
} 

get f():{[key: string]: AbstractControl}{
  return this.recovery.controls;
}

onSubmit(): void{
  this.submitted =true;
  if(this.recovery.invalid){
    return;
  }
  console.log(JSON.stringify(this.recovery.value, null, 2));
  // alert("Usuario autenticado" + this.form.value.email);
}

onReset(): void {
  this.submitted=false;
  this.recovery.reset();
}

}
