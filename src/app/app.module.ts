import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SellControlComponent } from './sell-control/sell-control.component';
import { AdminComponent } from './admin/admin.component';
import { Usuario01Component } from './usuario01/usuario01.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellControlComponent,
    AdminComponent,
    Usuario01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
