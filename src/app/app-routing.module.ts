import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';

// 在设置路由中，具体的路由放在最前面，通配符的路由放在最后面
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id/:name', component: ProductComponent,
    children: [
      { path: '', component: ProductDescComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ]
  },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
