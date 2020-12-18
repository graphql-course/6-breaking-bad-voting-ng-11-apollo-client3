// import gql from 'graphql-tag';

import { gql } from 'apollo-angular';

export const CHARACTER_OBJECT = gql`
  fragment CharacterObject on Character {
    id
    name
    actor
    description
    total_episodes
    photo
    votes
    url
  }
`;
