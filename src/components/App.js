import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route }             from 'react-router-dom';
import Home           from './Home.js';
import Speakers       from './Speakers.js';
import TalksPage          from './TalksPage.js';
import './App.scss';


class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/speakers" component={Speakers}/>
          <Route exact path="/talks" component={TalksPage}/>
        </Switch>
      </Router>
    )
  }
}
export default App;