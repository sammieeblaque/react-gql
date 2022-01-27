import { useQuery } from "@apollo/client";
import { CHARACTERS, CHARACTER } from "../queries";

export const useCharacters = () => {
  const { loading, data, error } = useQuery(CHARACTERS);
  return {
    error,
    data,
    loading,
  };
};

export const useCharacter = () => {
  const { loading, data, error } = useQuery(CHARACTER);
  return {
    error,
    loading,
    data,
  };
};
