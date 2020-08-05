import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Brand Name
          </Typography>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={() => history.push('/login')}
          >
            Sign in
          </ColorButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
