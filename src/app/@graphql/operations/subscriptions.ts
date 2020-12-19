import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragment';

export const CHANGE_VOTE = gql`
  subscription changeIndividualVote($id: ID!, $skip: Boolean!) {
    changeVote(id: $id) {
      ...CharacterObject
    }
  }
  ${CHARACTER_OBJECT}
`;
