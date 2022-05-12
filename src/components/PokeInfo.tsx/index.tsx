import { Color, Type } from "../../types";
import { formatNumbering, mapColorToHex, mapTypeToHex } from "../../utils";
import * as Styles from "./styles";

interface PokeInfoProps {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

function PokeInfo({ id, name, types, color }: PokeInfoProps) {
  return (
    <Styles.Wapper color={mapColorToHex(color?.name)}>
      <Styles.ImageWrapper>
        <Styles.Image src="/assets/poketball.svg" />
      </Styles.ImageWrapper>

      <Styles.InfoWrapper>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Index> {formatNumbering(id)}</Styles.Index>
      </Styles.InfoWrapper>

      <Styles.TypeList>
        {types?.map(({ type }, idx) => (
          <Styles.TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
            <Styles.TypeInfo src={`/assets/${type.name}.svg`} />
          </Styles.TypeWrapper>
        ))}
      </Styles.TypeList>

      <Styles.ThumbnailImageWrapper>
        <Styles.ThumbnailImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="image"
        />
      </Styles.ThumbnailImageWrapper>
    </Styles.Wapper>
  );
}

export default PokeInfo;
