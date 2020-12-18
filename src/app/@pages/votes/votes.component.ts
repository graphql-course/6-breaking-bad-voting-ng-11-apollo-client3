import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';
import { CharactersService } from '../characters/characters.service';
// https://valor-software.com/ng2-charts/
// Instalar librería siguiendo los pasos
// Crear el componente para el gráfico
// ng g m @shared/components/bar-chart && ng g c @shared/components/bar-chart --skip-tests
// Añadir "BarChartModule" dentro de votes.module.ts
// Añadir "ChartsModule" dentro de bar-chart.module.ts
// Añadir lo relacionado a pie-chart, el ejemplo para tener la gráfica
// en votes.component.html, añadir <app-bar-chart></app-bar-chart>
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  charactersList: Array<ICharacter> = [];
  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.list(true).subscribe((result) => {
      this.charactersList = result;
      console.log(this.charactersList); // comprobar que solo viene con 3 datos
    });
  }

}
