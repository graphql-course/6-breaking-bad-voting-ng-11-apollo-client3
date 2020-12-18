import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragment';

// Hacer la prueba en el PLAYGROUND
export const ADD_VOTE = gql`
  mutation addVote ($id: ID!, $skip: Boolean!){
    addVote(character: $id) {
      characters {
        ...CharacterObject
      }
    }
  }
  ${CHARACTER_OBJECT}
`;
