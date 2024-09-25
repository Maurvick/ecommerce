import { Routes } from '@angular/router';

import { ProductItemComponent } from './components/product-item/product-item.component';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  { path: 'product/id/:id', component: ProductItemComponent },
];
