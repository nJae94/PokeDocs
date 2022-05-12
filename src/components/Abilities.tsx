import styled from "@emotion/styled";
import { mapColorToHex } from "../utils";
import { Ability, Color } from "../types";

interface AbilitiesProps {
  abilities: Ability[];
  color?: Color;
}

function Abilities({ abilities, color }: AbilitiesProps) {
  console.log(abilities);
  return (
    <Wrapper>
      <Title color={mapColorToHex(color?.name)}>Abilities</Title>
      <List>
        <ListItem>
          <Label>Label</Label>
          <Description>Description</Description>
        </ListItem>
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
