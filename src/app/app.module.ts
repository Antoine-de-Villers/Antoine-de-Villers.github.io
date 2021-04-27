import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headerComponent';
import { NavComponent } from './nav/navComponent';
import { ContentAreaComponent } from './contentArea/contentAreaComponent';
import { AboutMeComponent } from './about-me/aboutMeComponent';
import { ContactComponent } from './contact/contactComponent';
import { FooterComponent } from './footer/footerComponent';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentAreaComponent,
    AboutMeComponent,
    ContactComponent,
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
