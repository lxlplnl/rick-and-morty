import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";

function CharacterProfile({ classes, image, name, location }) {
  return <Card className={classes.root}>
    <CardMedia
      className={classes.media}
      image={image}
      title={name}
    />
    <CardContent>
      <Typography variant="h4">{name}</Typography>
      <Typography
        gutterBottom
        color="textSecondary"
        component="p">
        {`${location.name} (${location.type})`}
      </Typography>
    </CardContent>
  </Card>;
}

export default CharacterProfile;
