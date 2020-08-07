import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
} from '@material-ui/core';

const Registration = props => {
  const classes = useStyle();

  // Declare the form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  // Destructure data from formData
  const { firstName, lastName, email, password, password2 } = formData;

  // Form Data change Handler
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit Form handler
  const handleSubmit = e => {
    e.preventDefault();
    // handle business logic
    console.log(formData);
    // clear formData
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="FirstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="LastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                className={classes.link}
                variant="body2"
                onClick={() => props.history.push('/login')}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

// custom style

const useStyle = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    cursor: 'pointer',
  },
}));

export default Registration;
