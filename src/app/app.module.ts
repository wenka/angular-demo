import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import AppRouterConfig from './ts/router';
import {MainComponent} from './view/main/main.component';
import {ProductListComponent} from './view/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
