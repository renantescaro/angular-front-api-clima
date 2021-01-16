import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.component.html',
  styleUrls: ['./especificacoes.component.css']
})
export class EspecificacoesComponent implements OnInit {

  @Input() chuva;
  @Input() umidade;
  @Input() vento;

  constructor() { }

  ngOnInit() {
  }

}
