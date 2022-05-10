import PokeList from "../components/List/PokeList";
import styled from "@emotion/styled";

const IndexPage = () => {
  return (
    <Wrapper>
      <Title>포켓몬 도감</Title>
      <Desc>그냥 만든 포켓몬 도감</Desc>
      <PokeList />
      <ImgWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`;

const Desc = styled.small`
  color: #6b7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

const ImgWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
