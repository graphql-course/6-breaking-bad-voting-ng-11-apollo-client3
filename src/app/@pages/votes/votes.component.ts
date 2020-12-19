import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  charactersList: Array<ICharacter> = [];
  constructor(private characterService: CharactersService,
              private votesService: VotesService) { }

  ngOnInit(): void {
    this.characterService.list(true).subscribe((result) => {
      this.charactersList = result;
    });
  }

  addVote(id: string) {
    console.log('Vote', id);
    // Servicio de votos
    this.votesService.add(id).subscribe((result) => {
      console.log(result);
    });
  }

}
