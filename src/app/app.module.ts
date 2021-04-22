import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/aboutMeComponent';
import { HeaderComponent } from './header/headerComponent';
import { NavComponent } from './nav/navComponent';
import { ContentAreaComponent } from './contentArea/contentAreaComponent';
import { FooterComponent } from './footer/footerComponent';




@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeaderComponent,
    NavComponent,
    ContentAreaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
