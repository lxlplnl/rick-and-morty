import React, { useEffect } from "react";
import { CircularProgress, Container } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getCharacter } from "../../redux/actions/character";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";


function CharacterDetail({ getCharacter, character, pending }) {
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();

  const { id, name, image, location, episode } = character;

  useEffect(() => {
    const id = parseInt(params.id, 10);

    if (typeof id === 'number' && id > 0)
      getCharacter(params.id);
    else {
      history.push('/not-found')
    }
  }, [getCharacter, history, params]);


  return <Container>
    {pending && <CircularProgress />}
    {!pending &&
    <Grid container spacing={3}>
      <Grid item>
        <Card className={classes.root}>
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
        </Card>
      </Grid>

      <Grid item className={classes.item}>
        <Paper>
          <Container>
            <Typography gutterBottom variant="h5" component="h3">
              Last 5 Episode
            </Typography>
            {episode.map(episode => {
              return <Typography color="textSecondary">{episode.name}</Typography>
            })}
          </Container>
        </Paper>
      </Grid>
    </Grid>
    }
  </Container>
}

const mapStateToProps = (state) => {

  const { character, pending } = state.character;

  if (Array.isArray(character.episode))
    character.episode = character.episode.slice(-5).reverse();

  return {
    character,
    pending,
  }

};

const mapDispatchToProps = {
  getCharacter
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
