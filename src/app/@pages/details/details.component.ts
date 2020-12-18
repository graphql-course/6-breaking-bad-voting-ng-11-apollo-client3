import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params.id;
      this.charactersService.get(id).subscribe((result) => {
        console.log(result);
      });
    });
  }

}
