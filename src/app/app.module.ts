import { NgModule, isDevMode } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { CoreModule } from '@app/core/core.module'
import { DataService } from '@app/core/service/data.service'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 4000 }), // Artificial delay !!!
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
