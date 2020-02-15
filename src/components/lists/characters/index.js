import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../../redux/actions/characters";
import CharacterItem from "./item";

function CharacterList({ getCharacters, characters, pending }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page)
    console.log("page", page)
  }, [getCharacters, page]);

  return <div>
    <ul>
      {characters.map(character => <CharacterItem key={character.id} {...character} />)}
    </ul>
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
