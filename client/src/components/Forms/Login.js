import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  CardHeader,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

const Login = ({ history }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = data;

  // grave the data

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  // handle submit

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    setData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="my-1">
      <Grid container>
        <Grid item xs={0} sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title="Log in to your account" />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FormControl style={{ width: '100%' }}>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl style={{ width: '100%' }}>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleChange}
                  />
                </FormControl>
              </form>
            </CardContent>

            <CardActions>
              <Typography color="textSecondary" gutterBottom>
                Don't have account?{' '}
                <Link
                  to="/registration"
                  style={{ color: '#673ab7', fontSize: 18 }}
                >
                  signup
                </Link>
              </Typography>
              <ColorButton
                variant="contained"
                type="submit"
                color="primary"
                style={{ marginLeft: 'auto' }}
              >
                Login
              </ColorButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={0} sm={2} md={3}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
