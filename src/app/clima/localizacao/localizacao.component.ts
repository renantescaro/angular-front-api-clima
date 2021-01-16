import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  @Input() endereco;
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
