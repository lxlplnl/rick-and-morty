import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import CharacterList from '../../components/lists/characters';
import { setHeader } from '../../redux/actions/runtime';

function Home({ setHeader }) {
  useEffect(() => {
    setHeader({ title: 'Characters', leftIconKey: null });
  }, [setHeader]);

  return (
    <Container>
      <CharacterList />
    </Container>
  );
}

const mapDispatchToProps = {
  setHeader,
};

export default connect(undefined, mapDispatchToProps)(Home);
