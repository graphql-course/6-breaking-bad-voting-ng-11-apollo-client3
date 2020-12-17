import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/@interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() character: ICharacter = {
    id: '0',
    name: '',
    votes: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
