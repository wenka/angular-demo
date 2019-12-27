import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {AppRoutingModule} from './ts/app-routing/app-routing.module';
import {MainComponent} from './view/main/main.component';
import {ProductListComponent} from './view/product/product-list/product-list.component';
import { ProductInfoComponent } from './view/product/product-info/product-info.component';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductListComponent,
    ProductInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
