import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponentComponent } from './root-component/root-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SubLoginComponent } from './sub-login/sub-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
    LoginComponentComponent,
    SubLoginComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
