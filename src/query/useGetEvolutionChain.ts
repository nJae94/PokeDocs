import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { EvolutionChainResponse } from "../types";

const useGetEvolutionChain = (
  url?: string
): UseQueryResult<AxiosResponse<EvolutionChainResponse>, Error> => {
  return useQuery(["evolution", url], () => (url ? axios.get(url) : null), {
    enabled: !!url,
  });
};

export default useGetEvolutionChain;
