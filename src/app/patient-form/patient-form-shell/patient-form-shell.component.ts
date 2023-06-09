import { Component } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  templateUrl: './patient-form-shell.component.html',
  styleUrls: ['./patient-form-shell.component.scss'],
})
export class PatientFormShellComponent {
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
