import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ManageProductComponent } from './main/manage_product/manage_product.component';
import { CartComponent } from './main/cart/cart.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: '',             component: MainComponent },
    { path: 'admin/products',             component: ProductsComponent },
    { path: 'admin/products/new',             component: ProductFormComponent },
    { path: 'admin/products/edit/:id',             component: ProductFormComponent },
    { path: 'products/:id',             component: ManageProductComponent },
    { path: 'cart', component: CartComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
