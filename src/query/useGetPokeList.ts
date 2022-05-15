import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

export const getPokemon = async (id?: string) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id || ""}`,
    {
      params: {
        limit: 151,
      },
    }
  );

  return response.data;
};

const useGetPokemon = <T>(id?: string): UseQueryResult<T, Error> => {
  return useQuery(id ? ["pokemon", id] : "pokemon", () => getPokemon(id));
};

export default useGetPokemon;
