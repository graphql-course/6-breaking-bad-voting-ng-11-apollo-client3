import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { GET_CHARACTER, GET_CHARACTERS } from 'src/app/@graphql/operations/query';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  list(skip: boolean = false) {
    return this.query(GET_CHARACTERS, { skip }).pipe(map(( result: any) => {
      return result.characters;
    }));
  }

  get(id: string) {
    return this.query(GET_CHARACTER, { id, skip: false }).pipe(map(( result: any) => {
      return result.character;
    }));
  }
}
