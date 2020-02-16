import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function CharacterItem({ id, name, image }) {
  return <ListItem component={"a"} button>
      <ListItemAvatar>
        <Avatar
          alt={`${name}'s avatar`}
          src={image}
        />
    </ListItemAvatar>
    <ListItemText primary={name} />
  </ListItem>
}

export default CharacterItem;
