import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Login = props => {
  const classes = useStyles();

  // declare form state

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Destructure data from form

  const { email, password } = formData;

  // onchange handler for input

  const handleChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // form data sibmit handler

  const handleSubmit = e => {
    e.preventDefault();
    //handle business logic
    console.log(formData);
    //clear data
    setFormData({
      email: '',
      password: '',
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                className={classes.link}
                onClick={() => props.history.push('/registration')}
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    cursor: 'pointer',
  },
}));

export default Login;
