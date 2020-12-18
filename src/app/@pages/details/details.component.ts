import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/@interfaces/character.interface';

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
  constructor(private router: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params.id;
      this.charactersService.get(id).subscribe((result) => {
        this.character = result;
      });
    });
  }

}
