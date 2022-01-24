import { NgModule } from '@angular/core';
import "@angular/compiler"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginServiceService } from './Auth/login-service.service';
import { DashlayoutComponent } from './Dashboard/dashlayout/dashlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
