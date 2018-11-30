import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import RandomName from './components/RandomName';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  renderProjectList() {
    return (
      <div>
        <Link to="/project/random-name">Random Name</Link><br />
        <Link to="/project/counter">Counter</Link>
      </div>
    );
  }
  renderProject() {
    return (
      <div>
        <Switch>
          <Route exact path='/project/random-name' component={RandomName}></Route>
          <Route exact path='/project/counter' component={Counter}></Route>
        </Switch><br />
        <Link to="/">Back</Link>
      </div>
    );
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={this.renderProjectList} />
        <Route path="/project" render={this.renderProject} />
      </Switch>
    );
  }
}

export default App;
