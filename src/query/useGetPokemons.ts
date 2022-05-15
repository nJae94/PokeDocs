import { AxiosResponse } from "axios";
import { useQueries, UseQueryResult } from "react-query";
import { PokemonResponse } from "../types";
import { getPokemon } from "./useGetPokeList";

const useGetPokemons = (
  names: string[]
): Array<UseQueryResult<PokemonResponse, Error>> => {
  const queries = names.map((name, index) => ({
    queryKey: ["evolution", `${name}_${index}`],
    queryFn: () => getPokemon(name),
  }));

  return useQueries(queries) as Array<UseQueryResult<PokemonResponse, Error>>;
};

export default useGetPokemons;
