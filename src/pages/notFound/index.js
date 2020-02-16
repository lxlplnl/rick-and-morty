import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setHeader } from "../../redux/actions/runtime";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function NotFound({ setHeader }) {
  const history = useHistory();

  useEffect(() => {
    setHeader({ title: 'Not Found', leftIconKey: 'home' })
  }, [setHeader]);

  return <Container>
      <Grid container
            direction="column"
            justify="center"
            alignItems="center">
        <Typography variant='h2'>404 Not Found</Typography>
        <Button variant="contained"
                color="secondary"
                onClick={() => {
                  history.push('/')
                }}>
          Return to Home Page
        </Button>
    </Grid>
  </Container>
}

export default connect(undefined, { setHeader })(NotFound);
