import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.component.html',
  styleUrls: ['./especificacoes.component.css']
})
export class EspecificacoesComponent implements OnInit {

  chuva = 52
  umidade = 84
  vento = 10

  constructor() { }

  ngOnInit() {
  }

}
