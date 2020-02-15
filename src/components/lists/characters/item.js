import React from "react";
import { Link } from "react-router-dom";

function CharacterItem({ id, name, image }) {
  return <li>
    <Link to={'/' + id}>{name}</Link>
  </li>

}

export default CharacterItem;
