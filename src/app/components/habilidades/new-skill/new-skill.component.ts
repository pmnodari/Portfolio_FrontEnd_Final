import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{

  nombreHS: string;
  porcentaje: number;

  constructor(
    private skillService: SkillService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Metodo Html
  onCreate(): void{
    //Creamos el objeto skill
    const skill = new Skill(this.nombreHS, this.porcentaje);

    this.skillService.save(skill).subscribe(data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al agregar la skill");
      this.router.navigate(['']);
    });
  };

}
