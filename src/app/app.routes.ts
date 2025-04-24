import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { NotasComponent } from './notas/notas.component';
import { TareasComponent } from './tareas/tareas.component';



export const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
  },
  {
    path: 'notas', component: NotasComponent,
  },
  {
    path: 'tareas', component: TareasComponent,
  },

 
];
