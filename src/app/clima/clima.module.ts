import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ImagemComponent } from './imagem/imagem.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { EspecificacoesComponent } from './especificacoes/especificacoes.component';
import { ClimaComponent } from './clima/clima.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    ClimaComponent,
    LocalizacaoComponent, 
    ImagemComponent, 
    TemperaturaComponent, 
    EspecificacoesComponent, 
  ],
  exports:[
    ClimaComponent
  ]
})
export class ClimaModule { }
