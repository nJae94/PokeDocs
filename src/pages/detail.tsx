import { useParams } from "react-router-dom";
import useGetSpecies from "../query/useGetSpecies";
import styled from "@emotion/styled";
import { useCallback, useMemo, useState } from "react";
import PokeInfo from "../components/PokeInfo.tsx";
import Tabs from "../components/Tabs";
import useGetPokemon from "../query/useGetPokeList";
import { PokemonResponse } from "../types";
import About from "../components/About";

type Params = {
  id: string;
};

type Tab = "about" | "stats" | "evolution";

const DetailPage = () => {
  const params = useParams<Params>();
  const { id } = params;
  const [selectedTab, setSelectedTab] = useState<Tab>("about");
  const { data: species, isLoading: speciesLoading } = useGetSpecies(id);
  const { data: info, isLoading: infoLoading } =
    useGetPokemon<PokemonResponse>(id);

  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(
    () => ({
      color: species?.color,
      growthRate: species?.growth_rate.name,
      flavorText: species?.flavor_text_entries[0].flavor_text,
      genderRate: species?.gender_rate,
      isLegendary: species?.is_legendary,
      isMythical: species?.is_mythical,
      evolutionChainUrl: species?.evolution_chain.url,
    }),
    [
      species?.color,
      species?.evolution_chain.url,
      species?.flavor_text_entries,
      species?.gender_rate,
      species?.growth_rate.name,
      species?.is_legendary,
      species?.is_mythical,
    ]
  );

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(
    () => ({
      name: info?.name,
      types: info?.types,
      height: info?.height,
      weight: info?.weight,
      abilities: info?.abilities,
      baseExp: info?.base_experience,
      stats: info?.stats,
    }),
    [
      info?.abilities,
      info?.base_experience,
      info?.height,
      info?.name,
      info?.stats,
      info?.types,
      info?.weight,
    ]
  );

  const tabClickHandler = useCallback((tab: Tab) => {
    setSelectedTab(tab);
  }, []);

  return (
    <Container>
      <PokeInfo id={id || ""} name={name} types={types} color={color} />
      <TabsWrapper>
        <Tabs color={color} tab={selectedTab} onClick={tabClickHandler} />
        {selectedTab === "about" && (
          <About
            isLoading={speciesLoading || infoLoading}
            color={color}
            growthRate={growthRate}
            isLegendary={isLegendary}
            isMythical={isMythical}
            types={types}
            weight={weight}
            height={height}
            baseExp={baseExp}
            abilities={abilities}
            genderRate={genderRate}
          />
        )}
      </TabsWrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;
