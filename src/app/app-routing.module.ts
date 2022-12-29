import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/habilidades/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/habilidades/new-skill/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaExp', component:NewExperienciaComponent},
  {path:'editExp/:id', component:EditExperienciaComponent},
  {path:'nuevaEdu', component:NewEducacionComponent},
  {path:'editEdu/:id', component:EditEducacionComponent},
  {path:'nuevaSkill', component:NewSkillComponent},
  {path:'editSkill/:id', component:EditSkillComponent},
  {path:'editacercade/:id', component:EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
