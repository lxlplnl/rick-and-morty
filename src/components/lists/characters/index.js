import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../../redux/actions/characters";
import CharacterItem from "./item";
import List from "@material-ui/core/List";

function CharacterList({ getCharacters, characters, pending }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page)
  }, [getCharacters, page]);

  return <div>
    <List>
      {characters.map(character => <CharacterItem key={character.id} {...character} />)}
    </List>
    {pending && <p>Loading</p>}
  </div>
}

const mapStateToProps = (state) => ({
    characters: state.characters.characters,
    pending: state.characters.pending,
  }
);

const mapDispatchToProps = {
  getCharacters
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
