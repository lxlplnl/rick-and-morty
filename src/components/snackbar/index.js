import React from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { closeSnackbar } from "../../redux/actions/runtime";

const SNACKBAR_DURATION = 4000;

function AppSnackbar({ snackbar: { message, open, closeSnackbar } }) {
  return (
    <Snackbar open={open} autoHideDuration={SNACKBAR_DURATION} onClose={closeSnackbar}>
      <SnackbarContent message={message} />
    </Snackbar>
  )
}

const mapStateToProps = state => ({
  snackbar: state.runtime.snackbar
});

const mapDispatchToProps = {
  closeSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSnackbar);
