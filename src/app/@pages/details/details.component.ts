import { CharactersService } from './../characters/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';
import { VotesService } from '../votes/votes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character: ICharacter = {
    id: '-1',
    name: '',
    votes: -1
  };
  loading = false;
  constructor(private router: ActivatedRoute,
              private charactersService: CharactersService,
              private votesService: VotesService) { }

  ngOnInit(): void {
    this.loading = true;
    // Vamos a coger el valor del id de la ruta
    this.router.params.subscribe((params) => {
      const id = params.id;
      this.charactersService.get(id).subscribe((result) => {
        this.character = result;
        setInterval(() => this.loading = false, 450);
      });
      this.votesService.changeCharacterVotesListener(id).subscribe();
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
