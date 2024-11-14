import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'products',
        component : ProductComponent,
        canActivate : [AuthGuard]
    },
    {
        path : '',
        redirectTo : 'register',
        pathMatch : 'full'
    },
    {
        path : 'create-product',
        component : CreateProductComponent
    }
];
