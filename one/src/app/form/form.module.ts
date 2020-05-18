import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [OuterComponent, InnerComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
