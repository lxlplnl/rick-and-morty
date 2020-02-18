import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { getCharacter } from "../../redux/actions/character";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import { setHeader } from "../../redux/actions/runtime";
import { Loader } from "../../components/loader";
import CharacterProfile from "../../components/characterProfile";
import Episodes from "../../components/lists/episodes";

function CharacterDetail({ setHeader, getCharacter, character, pending }) {
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();

  const { name, image, location, episode } = character;

  useEffect(() => {
    setHeader({ title: 'Character Detail', leftIconKey: 'back' })
  }, [setHeader]);

  useEffect(() => {
    const id = parseInt(params.id, 10);

    if (!isNaN(id) && id > 0) {
      getCharacter(params.id);
    } else {
      history.push('/not-found')
    }
  }, [getCharacter, history, params]);


  return <Container>
    <Loader pending={pending} />
    {!pending &&
    <Grid container spacing={3} className={classes.paper}>
      <Grid item>
        <CharacterProfile classes={classes} image={image} name={name} location={location} />
      </Grid>

      <Grid item className={classes.item}>
        <Episodes classes={classes} episodes={episode} />
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
  getCharacter,
  setHeader
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
