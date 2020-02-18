import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

function Episodes({ classes, episodes }) {
  return <Paper className={classes.paper}>
    <Typography gutterBottom variant="h5" component="h3">
      Last 5 Episodes
    </Typography>
    {episodes && episodes.map(ep => {
      return <Typography key={ep.id}>{ep.name}</Typography>
    })}
  </Paper>;
}

export default Episodes;
