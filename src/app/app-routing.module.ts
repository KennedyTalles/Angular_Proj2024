import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './componentes/sobre/sobre.component';
import { ListComponent } from './componentes/lista/list.component';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';
import { DetalheComponent } from './componentes/detalhe/detalhe.component';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [

  {
    path: '', 
    redirectTo: 'sobre', //Sempre irá iniciar nesta pag.
    pathMatch: 'full'
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path:'lista',
    component: ListComponent
  },
  {
    path:'add-aluno',
    component: AddAlunoComponent    
  },
  {
    path:'editar/:id',
    component: EditarComponent    
  },
  {
    path:'detalhe',
    component: DetalheComponent    
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
