import { NgModule } from '@angular/core'
import { PatientFormRoutingModule } from '@app/patient-form/patient-form-routing.module'
import { SharedModule } from '@app/shared/shared.module'

import { PatientFormShellComponent } from './patient-form-shell/patient-form-shell.component'

@NgModule({
  declarations: [PatientFormShellComponent],
  imports: [SharedModule, PatientFormRoutingModule],
})
export class PatientFormModule {}
