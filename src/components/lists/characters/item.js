import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from 'react-router-dom';

function CharacterItem({ id, name, image }) {
  const history = useHistory();

  return (
    <ListItem
      component={"a"}
      button
      onClick={() => history.push('/character/' + id)}>
      <ListItemAvatar>
        <Avatar alt={`${name}'s avatar`} src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default CharacterItem;
