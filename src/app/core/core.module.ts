import { HttpClientModule } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EnsureModuleLoadedOnceGuard } from '@app/core/ensure-module-loaded-once.guard'
import { appReducer } from '@app/core/state/app.reducer'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

@NgModule({
  imports: [
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forFeature([]),
  ],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
