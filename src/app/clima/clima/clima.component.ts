import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  endereco    = 'Avenida Marechal Rondon - Vila Sao Joaquim, Penápolis - SP, 16305-076';
  data        = 'sexta-feira, 20:00';
  urlImagem   = 'https://www.weatherbit.io/static/img/icons/t01d.png';
  temperatura = 26;
  chuva       = 52;
  umidade     = 84;
  vento       = 10;

  constructor() { }

  ngOnInit() {
  }

}
