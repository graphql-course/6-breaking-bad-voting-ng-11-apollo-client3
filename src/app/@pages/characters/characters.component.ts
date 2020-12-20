import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  charactersList: Array<ICharacter> = [];
  loading = false;
  constructor(private characters: CharactersService) { }

  ngOnInit(): void {
    this.loading = true;
    this.characters.list().subscribe((result) => {
      this.charactersList = result;
      setInterval(() => this.loading = false, 450);
    });
  }

}
