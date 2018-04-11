import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { MenteeApplication } from './Mentee/MenteeApplication';
import { MentorApplication } from './Mentor/MentorApplication';
import { Landing } from './Landing/Landing';
import { Matching } from './Matching/Matching';
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
          <Route exact path="/mentor-app" render={({history}) => <MentorApplication store={DreamStore} history={history} {...this.props} />} />
          <Route exact path="/matching" render={({history}) => <Matching store={DreamStore} history={history} {...this.props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
