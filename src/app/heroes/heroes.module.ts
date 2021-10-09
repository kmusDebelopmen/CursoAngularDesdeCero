import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //componentes que integran este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[       //componentes que queremos sean visibles fuera del modulo
        ListadoComponent,
        HeroeComponent
    ],
    imports:[ //solo se agregan modulos
        CommonModule  //si se usa ngfor o nfIf etc...
    ]
})
export class HeroesModule{}