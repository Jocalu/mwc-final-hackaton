import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
