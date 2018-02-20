import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import DreamStore from './DreamStore'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Login store={DreamStore} />} />
          <Route exact path="/register" render={() => <Register store={DreamStore} />} />
        </div>
      </Router>
    );
  }
}

export default App;
