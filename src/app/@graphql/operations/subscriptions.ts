import { gql } from 'apollo-angular';

export const CHANGE_VOTE = gql`
  subscription changeVoteListener($id: ID!){
    changeVote(id: $id) {
      id
      name
      votes
    }
  }
`;
