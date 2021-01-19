import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimaService } from '../clima/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  clima: any;

  constructor(
    private climaService: ClimaService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    // Se não receber cidade, buscar por localização
    const nomeCidade = this.activatedRoute.snapshot.params.nomeCidade;
    if(!nomeCidade){
      const latitude  = this.activatedRoute.snapshot.params.latitude;
      const longitude = this.activatedRoute.snapshot.params.longitude;

      this.climaService
        .porLatitudeLongitude(latitude, longitude)
        .subscribe(clima => {
          this.setarClima(clima);
        });
      return;
    }

    this.climaService
    .porCidade(nomeCidade)
    .subscribe(clima => {
      this.setarClima(clima);
    });
    return;
  }

  setarClima(clima){
    this.clima = clima;
    this.clima.urlImagem = this.climaService.url + clima.urlImagem;
  }
}
