import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClimaModule } from './clima/clima.module';
import { AppRoutingModule } from './app.routing.module';
import { PegarLocalizacaoComponent } from './pegar-localizacao/pegar-localizacao.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PegarLocalizacaoComponent,
  ],
  imports: [
    BrowserModule,
    ClimaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
