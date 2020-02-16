import { CircularProgress } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";


export function Loader({ pending }) {
  const classes = useStyles();

  if (!pending) return <></>;
  return (
    <Grid className={classes.container} container justify="center" alignItems="center">
      <CircularProgress />
    </Grid>
  )
}
