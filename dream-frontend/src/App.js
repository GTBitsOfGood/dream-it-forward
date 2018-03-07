import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { MenteeApplication } from './Mentee/MenteeApplication';
import { Landing } from './Landing/Landing';
import DreamStore from './Stores/DreamStore'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={({history}) => <Login store={DreamStore} history={history} {...this.props} />} />
          <Route exact path="/register" render={({history}) => <Register store={DreamStore} history={history} {...this.props} />} />
          <Route exact path="/landing" render={({history}) => <Landing store={DreamStore} history={history} {...this.props} />} />
          <Route exact path="/mentee-app" render={({history}) => <MenteeApplication store={DreamStore} history={history} {...this.props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
