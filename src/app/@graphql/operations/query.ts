// import gql from 'graphql-tag';
// Hacer un refactor con fragment en el playground y luego crear
// fichero fragment.ts y refactorizar
import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragment';

export const GET_CHARACTERS = gql`
  query list($skip: Boolean!){
    characters {
      ...CharacterObject
    }
  }
  ${CHARACTER_OBJECT}
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!, $skip: Boolean!) {
    character(id: $id) {
      ...CharacterObject
    }
  }
  ${CHARACTER_OBJECT}
`;
