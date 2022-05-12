import React from "react";
import { Ability, Color, Type } from "../../types";
import { mapTypeToHex } from "../../utils";
import Abilities from "../Abilities";
import * as Styles from "./styles";

interface AboutProps {
  isLoading: boolean;
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  weight?: number;
  height?: number;
  baseExp?: number;
  abilities?: Array<Ability>;
}

function About({
  isLoading,
  isMythical,
  isLegendary,
  types,
  weight,
  flavorText,
  growthRate,
  genderRate,
  color,
  height,
  baseExp,
  abilities,
}: AboutProps) {
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return (
    <Styles.Wrapper>
      <Styles.FlavorText>{flavorText}</Styles.FlavorText>
      {isLoading ? (
        <Styles.ImageWrapper>
          <Styles.Image src="/loading.gif" />
        </Styles.ImageWrapper>
      ) : (
        <>
          <Styles.TypeList>
            {types?.map(({ type }, index) => (
              <Styles.TypeWrapper key={index} color={mapTypeToHex(type.name)}>
                <Styles.TypeImage src={`/assets/${type.name}.svg`} />
                <Styles.TypeLabel>{type.name.toUpperCase()}</Styles.TypeLabel>
              </Styles.TypeWrapper>
            ))}
          </Styles.TypeList>
          <Styles.InfoContainerWrapper>
            <Styles.Title color={mapTypeToHex(color?.name)}>
              포켓몬 정보
            </Styles.Title>
            <Styles.InfoContainer>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Height</Styles.InfoItemLabel>
                {height && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {height}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Weight</Styles.InfoItemLabel>
                {weight && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {weight}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Gender</Styles.InfoItemLabel>
                {genderRate && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {genderRate === -1 ? "Unknown" : "Male / Female"}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Growth Rate</Styles.InfoItemLabel>
                {growthRate && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {growthRate}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Base Exp</Styles.InfoItemLabel>
                {baseExp && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {baseExp}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
              <Styles.InfoItem>
                <Styles.InfoItemLabel>Rarity</Styles.InfoItemLabel>
                {rarity && (
                  <Styles.InfoItemValue color={mapTypeToHex(color?.name)}>
                    {rarity}
                  </Styles.InfoItemValue>
                )}
              </Styles.InfoItem>
            </Styles.InfoContainer>
          </Styles.InfoContainerWrapper>
          {abilities && <Abilities abilities={abilities} color={color} />}
        </>
      )}
    </Styles.Wrapper>
  );
}

export default React.memo(About);
