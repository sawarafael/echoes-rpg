import * as React from "react";
import { Parallax } from "react-parallax";

import Layout from "../../components/Layout/Layout";
import {
  BackgroundChar,
  ContentBox,
  StyledBox,
  Subtitle,
  Title,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Layout>
      <Parallax
        blur={{ min: 0, max: 1 }}
        bgImage={require("./../../assets/bg.jpg")}
        bgImageAlt="CrystalBG"
        strength={350}
      >
        <StyledBox>
          <Title
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              marginTop: "110px",
            }}
            variant="h2"
          >
            Nova Temporada
          </Title>
          <Subtitle
            variant="h6"
            sx={{
              margin: "0 auto",
              paddingTop: "20px",
            }}
          >
            A <strong>Saga de Kurogane</strong> trás novas aventuras e desafios
            para os Scions que estão a todo custo tentando escapar da
            perseguição do império de Enfinimia enquanto desbravam os mistérios
            do continente de Asdrânia, explorando a terra dos Samurais e
            descobrindo o legado de suas Artes e de seus Orgulhos.
          </Subtitle>
          <ContentBox>
            <BackgroundChar
              width={"100%"}
              alt="ninnabg"
              src="https://media.discordapp.net/attachments/789119825468194826/1003844718989426810/NinnaBG.JPG"
            />
          </ContentBox>
        </StyledBox>
      </Parallax>
    </Layout>
  );
};

export default Home;
