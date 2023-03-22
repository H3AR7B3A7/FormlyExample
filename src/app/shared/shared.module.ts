import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component'

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FormComponent],
  declarations: [
    FormComponent
  ],
})
export class SharedModule {}
