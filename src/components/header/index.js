import { HideOnScroll } from "../hideOnScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const getLeftIcon = (history, key) => {

  switch (key) {
    case 'back' : {
      return <IconButton color="inherit" onClick={() => history.goBack()}>
        <ArrowBackIosIcon />
      </IconButton>
    }
    case 'home' : {
      return <IconButton color="inherit" onClick={() => history.push('/')}>
        <HomeIcon />
      </IconButton>
    }
    default :
      return <></>;
  }
};


function Header({ headerData: { title, leftIconKey } }) {
  const history = useHistory();

  const leftIcon = getLeftIcon(history, leftIconKey);
  return (
    <Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            {leftIcon}
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  headerData: state.runtime.header
});
export default connect(mapStateToProps)(Header);
