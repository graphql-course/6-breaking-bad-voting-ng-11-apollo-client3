import { ADD_VOTE } from './../../@graphql/operations/mutation';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { map } from 'rxjs/internal/operators/map';
import { CHANGE_VOTE, CHANGE_VOTES } from 'src/app/@graphql/operations/subscriptions';

@Injectable({
  providedIn: 'root'
})
export class VotesService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  add(id: string) {
    return this.mutation(ADD_VOTE, { id, skip: true}).pipe(map((result: any) => {
      return result.addVote;
    }));
  }

  changeCharacterVotesListener(id: string) {
    return this.subscription(CHANGE_VOTE, {id, skip: true}).pipe(
      map( (result: any ) => {
        return result.changeVote;
      })
    );
  }

  changeVotesListener() {
    return this.subscription(CHANGE_VOTES, {skip: true}).pipe(
      map( (result: any ) => {
        return result.changeVotes;
      })
    );
  }
}
