import React from "react";
import { connect } from "react-redux";
import { getCharacters, getCharactersInfinity } from "../../../redux/actions/characters";
import CharacterItem from "./item";
import InfinityList from "../../InfinityList";

export function CharacterList({ getCharacters, getCharactersInfinity, characters, pending, initialized }) {
  return <InfinityList
    initializer={getCharacters}
    initialized={initialized}
    onScrollEnd={getCharactersInfinity}
    list={characters}
    pending={pending}
    renderListThumb={(character) => <CharacterItem key={character.id} {...character} />}
  />
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
