import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './components/Forms/Login';
import Registration from './components/Forms/Registration';
import Home from './components/layout/Home';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
