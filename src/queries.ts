import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
        species
        gender
      }
    }
  }
`;

export const CHARACTER = gql`
  query Character($id: number) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;
