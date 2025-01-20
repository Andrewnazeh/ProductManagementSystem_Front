import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductFormComponentComponent } from './components/product-form-component/product-form-component.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'register',
    component: RegisterComponentComponent,
  },
  {
    path: 'home',
    component: ProductListComponentComponent,
  },
  {
    path: 'products',
    component: ProductListComponentComponent,
  },
  {
    path: 'createproducts',
    component: ProductFormComponentComponent,
  },
];
