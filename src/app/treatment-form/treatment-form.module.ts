import { NgModule } from '@angular/core'
import { SharedModule } from '@app/shared/shared.module'
import { TreatmentFormRoutingModule } from '@app/treatment-form/treatment-form-routing.module'
import { TreatmentFormShellComponent } from '@app/treatment-form/treatment-form-shell/treatment-form-shell.component'

@NgModule({
  declarations: [TreatmentFormShellComponent],
  imports: [SharedModule, TreatmentFormRoutingModule],
})
export class TreatmentFormModule {}
