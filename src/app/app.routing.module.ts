import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClimaComponent } from "./clima/clima/clima.component";

const rotas: Routes = [
    {path: 'cidade/:cidade',component: ClimaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}