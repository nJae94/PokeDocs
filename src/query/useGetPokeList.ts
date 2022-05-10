import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";

const getPokemon = (id?: string) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: {
      limit: 151,
    },
  });

const useGetPokemon = <T>(
  id?: string
): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(id ? ["pokemon", id] : "pokemon", () => getPokemon(id));
};

export default useGetPokemon;
