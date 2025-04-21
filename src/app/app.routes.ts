import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCartComponent } from './pages/products/product-cart/product-cart.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [{

    path: '',
    pathMatch: 'full',
    component: ProductsComponent 
},
    {
        path: 'cart',
        component: CartComponent
    }
];
