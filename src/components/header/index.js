import { HideOnScroll } from "../hideOnScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from "react-redux";
import { useHistory } from "react-router";


const getLeftIcon = (history, key) => {

  switch (key) {
    case 'back' : {
      return <ArrowBackIosIcon onClick={() => history.goBack()} />
    }
    case 'home' : {
      return <HomeIcon onClick={() => history.push('/')} />
    }
    default :
      return undefined;
  }
};


function Header({ headerData }) {
  const { title, leftIconKey } = headerData;
  const history = useHistory();

  const leftIcon = getLeftIcon(history, leftIconKey);
  return (
    <Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            {leftIcon &&
            <IconButton edge="start" color="inherit" aria-label="menu">
              {leftIcon}
            </IconButton>
            }
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