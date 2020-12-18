import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    votes: 0
  };
  loading = false;
  constructor(private router: ActivatedRoute,
              private charactersService: CharactersService,
              private votesService: VotesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.router.params.subscribe((params) => {
      const id = params.id;
      this.charactersService.get(id).subscribe((result) => {
        this.character = result;
        setInterval(() => this.loading = false, 600);
      });
      this.votesService.changeSelectVoteListener(id).subscribe();
    });
  }

}
