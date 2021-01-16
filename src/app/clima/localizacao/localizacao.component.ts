import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  endereco = 'Avenida Marechal Rondon - Vila Sao Joaquim, Penápolis - SP, 16305-076';
  data = 'sexta-feira, 20:00';

  constructor() { }

  ngOnInit() {
  }

}
