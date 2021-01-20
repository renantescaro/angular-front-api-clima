import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima/clima/clima.service';

@Component({
  selector: 'app-pegar-localizacao',
  templateUrl: './pegar-localizacao.component.html',
  styleUrls: ['./pegar-localizacao.component.css']
})
export class PegarLocalizacaoComponent implements OnInit {

  txtNomeCidade: string

  constructor() { }

  ngOnInit(): void {
  }

  porLocalizacao(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position: Position) => {
      if (position) {
          console.log(position.coords.latitude+","+position.coords.longitude);
          window.location.href = 'clima/localizacao/'+position.coords.latitude.toString()+'/'+
            position.coords.longitude.toString();
      }
      },(error: PositionError) => {
        console.log(error);
      });
    }else{
        alert("Geolocalização não suportado no seu navegador");
    }
  }

  porNomeCidade(){
    document.getElementById('titulo').textContent = 'Digite o nome da cidade:';
    document.getElementById('dvBotoes').style.display = 'none';
    document.getElementById('dvNomeCidade').style.display = 'block';
  }

  confirmarNomeCidade(){
    const nomeCidade = this.txtNomeCidade;

    if(!nomeCidade){
      alert('Digite o nome da cidade!');
      return;
    }

    window.location.href = 'clima/cidade/'+nomeCidade.toString();
  }
}
