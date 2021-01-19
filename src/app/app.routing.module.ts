import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClimaComponent } from "./clima/clima/clima.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PegarLocalizacaoComponent } from "./pegar-localizacao/pegar-localizacao.component";

const rotas: Routes = [
    {path: '',component: PegarLocalizacaoComponent},
    {path: 'clima/cidade/:nomeCidade',component: ClimaComponent},
    {path: 'clima/localizacao/:latitude/:longitude',component: ClimaComponent},
    {path: '**',component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}