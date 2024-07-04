import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basicCss.directive';
import { ToLowerCaseDirective } from './shared/directives/to-lower-case.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { NavBarDirective } from './shared/directives/nav-bar.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    ToLowerCaseDirective,
    CreditCardDirective,
    NavBarDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
