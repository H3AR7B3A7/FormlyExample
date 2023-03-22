import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TreatmentFormShellComponent } from '@app/treatment-form/treatment-form-shell/treatment-form-shell.component'

const routes: Routes = [
  {
    path: '',
    component: TreatmentFormShellComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentFormRoutingModule {}
