import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePersonComponent,
    EditPersonComponent,
    CreateProductComponent,
    EditProductComponent,
    ListPersonComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdministrationModule { }
