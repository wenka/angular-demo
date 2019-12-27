import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../view/main/main.component';
import {ProductListComponent} from '../../view/product/product-list/product-list.component';
import {ProductInfoComponent} from '../../view/product/product-info/product-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'productList',
        component: ProductListComponent,
        pathMatch: 'full'
      },
      {
        path: 'productInfo',
        component: ProductInfoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
