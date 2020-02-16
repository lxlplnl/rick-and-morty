import React, { useEffect } from "react";
import CharacterList from "../../components/lists/characters";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { setHeader } from "../../redux/actions/runtime";

function Home({ setHeader }) {
  useEffect(() => {
    setHeader({ title: 'Characters', leftIconKey: null })
  }, []);

  return <Container>
    <CharacterList />
  </Container>
}

export default connect(undefined, { setHeader })(Home);
