import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characters: CharactersService) { }

  ngOnInit(): void {
    this.characters.list().subscribe((result) => {
      console.log(result);
    });
  }

}
