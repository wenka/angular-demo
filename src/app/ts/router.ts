import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from '../view/main/main.component';
import {AppComponent} from '../app.component';
import {ProductListComponent} from '../view/product/product-list/product-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'productList',
        component: ProductListComponent
      }
    ]
  }
];

export default RouterModule.forRoot(
  appRoutes
);
