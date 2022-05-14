import axios, { AxiosResponse } from "axios";
import { useQueries } from "react-query";
import { UseQueryResult } from "react-query/types/react/types";
import { Ability, AbilityResponse } from "../types";

const useGetAbilites = (
  abilites: Array<Ability>
): Array<UseQueryResult<AxiosResponse<AbilityResponse>, Error>> => {
  const queries = abilites.map(({ ability }, index) => ({
    queryKey: ["ability", index],
    queryFn: () => axios.get(ability.url),
  }));

  const result = useQueries(queries) as Array<
    UseQueryResult<AxiosResponse<AbilityResponse>, Error>
  >;

  return result;
};

export default useGetAbilites;
