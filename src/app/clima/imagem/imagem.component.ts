import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  urlImagem = 'https://www.weatherbit.io/static/img/icons/t01d.png';

  constructor() { }

  ngOnInit() {
  }

}
