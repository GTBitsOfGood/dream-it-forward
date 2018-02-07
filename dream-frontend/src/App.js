import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
