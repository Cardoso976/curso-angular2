import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
import { AppRoutingModule } from './app.rounting.module';
//import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/aluno.module';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule
    //routing
  ],
  providers: [AuthService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }