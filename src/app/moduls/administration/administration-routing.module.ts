import { createComponent } from '@angular/compiler/src/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';

const routes: Routes = [
  {
    path:"product-create",
    component: CreateProductComponent
  },
  {
    path:"product-edit",
    component: EditProductComponent
  },
  {
    path:"product-list",
    component: ListProductComponent
  },
  {
    path:"user-create",
    component: CreatePersonComponent
  },
  {
    path:"user-edit",
    component: EditPersonComponent
  },
  {
    path:"user-list",
    component: ListPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
