import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HeadLogoComponent } from './head-logo/head-logo.component';
import { HeadLinksComponent } from './head-links/head-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeadLogoComponent,
    HeadLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
