import { VotesService } from './votes.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';
import { CharactersService } from '../characters/characters.service';
// https://valor-software.com/ng2-charts/
// Instalar librería siguiendo los pasos
// Crear el componente para el gráfico
// ng g m @shared/components/pie-chart && ng g c @shared/components/pie-chart --skip-tests
// Añadir "PieChartModule" dentro de votes.module.ts
// Añadir "ChartsModule" dentro de bar-chart.module.ts
// Añadir lo relacionado a pie-chart, el ejemplo para tener la gráfica
// en votes.component.html, añadir <app-pie-chart></app-pie-chart>
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  charactersList: Array<ICharacter> = [];
  loading = false;
  constructor(private characterService: CharactersService,
              private votesService: VotesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.characterService.list(true).subscribe((result) => {
      this.charactersList = result;
      console.log(this.charactersList); // comprobar que solo viene con 3 datos
      setInterval(() => this.loading = false, 600);
    });

    this.votesService.changeVotesListener().subscribe();
  }

  addVote(id: string) {
    console.log('Voto para', id);
    // Añadir operación para voto
    this.votesService.add(id).subscribe((result: Array<ICharacter>) => {
      console.log(result);
    });
  }

}
