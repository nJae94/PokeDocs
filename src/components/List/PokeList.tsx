import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import useGetPokemon from "../../query/useGetPokeList";
import { ListResponse } from "../../types";

const getImageUrl = (id: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const formatNumbering = (pokemonIndex: number | string): string =>
  `#${(typeof pokemonIndex === "number"
    ? String(pokemonIndex)
    : pokemonIndex
  ).padStart(3, "0")}`;

const PokeList = () => {
  const { data, isLoading, isError } = useGetPokemon<ListResponse>();
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isError || isLoading ? (
        <LoadingWrapper>
          <Loading src="/loading.gif" alt="loading" />
        </LoadingWrapper>
      ) : (
        <List>
          {data &&
            data.results.map((pokemon, index) => (
              <ListItem
                key={pokemon.name}
                onClick={() => navigate(`/detail/${index + 1}`)}
              >
                <Image src={getImageUrl(index + 1)} alt={pokemon.name} />
                <Name>{pokemon.name}</Name>
                <Number>{formatNumbering(index + 1)}</Number>
              </ListItem>
            ))}
        </List>
      )}
    </Wrapper>
  );
};

export default PokeList;

const Wrapper = styled.div`
  margin-top: 24px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
`;

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const Number = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

const Loading = styled.img``;
