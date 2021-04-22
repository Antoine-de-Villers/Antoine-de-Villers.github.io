import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/aboutMeComponent';
import { ContentAreaComponent } from './contentArea/contentAreaComponent';

const routes: Routes = [
  {
  path: '',
  component: ContentAreaComponent
  },
 {
   path: 'about-me',
   component: AboutMeComponent
 }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
