import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 300,
    minWidth: 300,
    maxWidth: 300,
  },
  item: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
  }
}));
