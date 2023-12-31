import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path:'',component:ListProductsComponent},
  { path:'crear-producto',component:CreateProductComponent},
  { path:'editar-producto/:id',component:CreateProductComponent},
  { path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
