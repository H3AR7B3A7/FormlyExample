import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent<T> {
  @Input()
  model!: T
  @Input()
  fields!: FormlyFieldConfig[]

  form = new FormGroup({})

  onSubmit(model: T): void {
    console.log(model)
  }
}
