import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, getCharactersInfinity } from "../../../redux/actions/characters";
import CharacterItem from "./item";
import List from "@material-ui/core/List";
import { Loader } from "../../loader";
import { Container } from "@material-ui/core";

function CharacterList({ getCharacters, getCharactersInfinity, characters, pending, initialized }) {

  useEffect(() => {
    if (!initialized) getCharacters();
  }, [getCharacters, initialized]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    getCharactersInfinity()
  }, [getCharactersInfinity]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, initialized]);

  return <Container>
    <Loader pending={pending} />
    <List>
      {characters.map(character => <CharacterItem key={character.id} {...character} />)}
    </List>
  </Container>
}

const mapStateToProps = (state) => ({
    characters: state.characters.characters,
    pending: state.characters.pending,
    initialized: state.characters.initialized,
  }
);

const mapDispatchToProps = {
  getCharacters,
  getCharactersInfinity
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
