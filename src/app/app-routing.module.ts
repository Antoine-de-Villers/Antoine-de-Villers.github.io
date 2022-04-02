import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentAreaComponent } from './contentArea/contentAreaComponent';
import { AboutMeComponent } from './about-me/aboutMeComponent';
import { ContactComponent } from './contact/contactComponent';

const routes: Routes = [
  {
  path: '',
  component: ContentAreaComponent
  },
 {
   path: 'about-me',
   component: AboutMeComponent
 },
 {
   path: 'contact',
   component: ContactComponent
 }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
