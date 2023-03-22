import { Component } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-treatment-form-shell',
  templateUrl: './treatment-form-shell.component.html',
  styleUrls: ['./treatment-form-shell.component.scss'],
})
export class TreatmentFormShellComponent {
  model: { email: string } = { email: '' }
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ]
}
