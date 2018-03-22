import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' } ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsSevice) => settingsSevice.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
