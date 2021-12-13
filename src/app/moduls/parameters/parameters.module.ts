import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CategoryComponent } from './category/category/category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { RemoveCategoryComponent } from './category/remove-category/remove-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    RemoveCategoryComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametersModule { }
