import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

export const routes: Routes = [
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
];
