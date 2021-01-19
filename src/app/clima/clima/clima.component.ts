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

  // urlImagem   = 'https://www.weatherbit.io/static/img/icons/t01d.png';

  constructor(
    private climaService: ClimaService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    // verificar a rota?

    // const nomeCidade = this.activatedRoute.snapshot.params.cidade;

    this.climaService
       .porCidade('lins')
       .subscribe(clima => {
         this.clima = clima
        });
  }

}
