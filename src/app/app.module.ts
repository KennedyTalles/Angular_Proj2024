import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ListComponent } from './componentes/lista/list.component';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';
import { DetalheComponent } from './componentes/detalhe/detalhe.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    SobreComponent,
    ListComponent,
    AddAlunoComponent,
    DetalheComponent,
    EditarComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
