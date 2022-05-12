import styled from "@emotion/styled";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

interface EvolutionStageProps {
  level: number;
  color?: Color;
}
function EvolutionStage({ level, color }: EvolutionStageProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={""} />
      </ImageWrapper>
      <DividerWrapper>
        {level && (
          <Text color={mapColorToHex(color?.name)}>{`Level ${level}`}</Text>
        )}
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image src={""} />
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
