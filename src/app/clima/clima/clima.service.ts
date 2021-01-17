import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Clima } from "./clima";

@Injectable({
    providedIn: 'root'
})
export class ClimaService{
    public url = 'http://localhost:5000/';
    constructor(private http: HttpClient){}

    porLatitudeLongitude(latitube: number, longitude: number){
        return this.http.get<Clima>(this.url+latitube.toString()+'/'+longitude.toString());
    }

    porCidade(cidade: string){
        return this.http.get<Clima>(this.url+'cidade/'+cidade+'/BR');
    }
}