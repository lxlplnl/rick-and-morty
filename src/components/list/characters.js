import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions/characters";

function CharacterList({ getCharacters, characters, pending }) {

  useEffect(() => {
    getCharacters()
  }, []);

  return <div>
    {pending
      ? <p>Loading</p>
      : <ul>
        {characters.map((character, i) => <li key={i}>{character}</li>)}
      </ul>
    }
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
