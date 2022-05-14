import styled from "@emotion/styled/macro";
import { mapColorToHex } from "../utils";
import { Ability, Color, EffectEntry } from "../types";
import useGetAbilites from "../query/useGetAbilities";
import { useCallback } from "react";

interface AbilitiesProps {
  abilities: Ability[];
  color?: Color;
}

function Abilities({ abilities, color }: AbilitiesProps) {
  const abilitesList = useGetAbilites(abilities);

  const getEffectEntry = useCallback((effectEntries: Array<EffectEntry>) => {
    if (effectEntries.length > 0) {
      return (
        effectEntries.find(
          (effectEntry) => effectEntry.language.name === "en"
        ) || effectEntries[0]
      );
    }
    return { effect: "" };
  }, []);

  return (
    <Wrapper>
      <Title color={mapColorToHex(color?.name)}>Abilities</Title>
      <List>
        {abilitesList.map(({ data }, index) => {
          return (
            <ListItem key={index}>
              <Label>{data?.data.name}</Label>
              <Description>
                {getEffectEntry(data?.data.effect_entries || []).effect}
              </Description>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default Abilities;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Wrapper = styled.div`
  margin-top: 32px;
`;

const ListItem = styled.li`
  display: flex;
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`;
