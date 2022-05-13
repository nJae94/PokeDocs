import axios from "axios";
import { useQuery } from "react-query";
import { SpeciesResponse } from "../types";

const speciesApi = async (id?: string) => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  return result.data;
};

const useGetSpecies = (id?: string) => {
  const { data, isError, isLoading } = useQuery<SpeciesResponse, Error>(
    ["species", { id }],
    () => speciesApi(id),
    {
      enabled: !!id,
    }
  );

  return { data, isLoading, isError };
};

export default useGetSpecies;
