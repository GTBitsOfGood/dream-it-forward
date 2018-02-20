import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import './index.css'

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
