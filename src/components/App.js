import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route }                 from 'react-router-dom';
import Home               from './Home.js';
import Speakers           from './Speakers.js';
import TalksPage          from './TalksPage.js';
import Committee          from './Committee.js';
import About              from './About.js';
import Sponsors           from './Sponsors.js';
import './App.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-201249248-1', {
  siteSpeedSampleRate: 100
});
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/speakers" component={Speakers}/>
          <Route exact path="/talks" component={TalksPage}/>
          <Route exact path="/committee" component={Committee}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/sponsors" component={Sponsors}/>
        </Switch>
      </Router>
    )
  }
}
export default App;