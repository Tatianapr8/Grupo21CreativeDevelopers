import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category_form: FormGroup= new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  get GetForm(): {[key: string]: AbstractControl}{
    return this.category_form.controls;
  }

  CreateForm(){
    this.category_form = this.fb.group({
      name:["",
            Validators.required]
    })
  }

  SaveRecord(){
    let model= new CategoryModel();
    model.name = this.GetForm['name'].value;
    this.service.SaveRecord(model).subscribe({
      next:(data: CategoryModel)=>{
        console.log("Guardado");
        this.router.navigate(["/parameters/category"])
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
