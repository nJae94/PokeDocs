import styled from "@emotion/styled";
import useGetPokemons from "../query/useGetPokemons";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

interface EvolutionStageProps {
  level: number;
  color?: Color;
  from: { name: string; url: string };
  to: { name: string; url: string };
}
function EvolutionStage({ level, color, from, to }: EvolutionStageProps) {
  const [prev, next] = useGetPokemons([from.name, to.name]);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={
            prev.data &&
            prev.data.sprites.other["official-artwork"].front_default
          }
        />
      </ImageWrapper>
      <DividerWrapper>
        {level && (
          <Text color={mapColorToHex(color?.name)}>{`Level ${level}`}</Text>
        )}
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image
          src={
            next.data &&
            next.data.sprites.other["official-artwork"].front_default
          }
        />
      </ImageWrapper>
    </Wrapper>
  );
}

export default EvolutionStage;

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

const Divider = styled.div`
  background-color: #d1d5db;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
