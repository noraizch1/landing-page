import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { RouterModule , Routes } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '' , component: FormComponent
  }

]

@NgModule({
  declarations: [OuterComponent, InnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FormModule { }
