import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/s-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skill: Skill[]=[];

  isLogged=false;

  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }
  
  cargarSkills(): void {
    this.skillService.lista().subscribe(data =>{this.skill=data});
  }
  onDelete(id?: number): void {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err=>{
        alert("No se puede eliminar el skill");
      });      
    }
  }

}
