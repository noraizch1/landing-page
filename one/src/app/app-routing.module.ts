import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {
    path: '',  component: LandingPageComponent
  },
  { path: 'form' , loadChildren: () => import('./form/form.module').then(m => m.FormModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
