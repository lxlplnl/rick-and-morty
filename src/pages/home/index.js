import React from "react";
import CharacterList from "../../components/lists/characters";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Home() {
  return <Container>
    <Typography variant="h3" >
      Characters
    </Typography>
    <CharacterList />
  </Container>
}

export default Home;
