import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'

import { FormComponent } from './form/form.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
  ],
  exports: [CommonModule, FormComponent],
  declarations: [FormComponent],
})
export class SharedModule {}
