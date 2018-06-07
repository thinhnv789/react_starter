import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import {DeviceContext, devices} from './contexts/device-context';

/* Home Components */
const HomeDesktop = Loadable({
  loader: () => import('./containers/Desktop/Home'),
  loading: () => <div className="home-loading">Loading...</div>,
});
const HomeTablet = Loadable({
  loader: () => import('./containers/Tablet/Home'),
  loading: () => <div className="home-loading">Loading...</div>,
});
const HomeMobile = Loadable({
  loader: () => import('./containers/Mobile/Home'),
  loading: () => <div className="home-loading">Loading...</div>,
});
/* End Home */

const About = Loadable({
  loader: () => import('./containers/Desktop/About'),
  loading: () => <div>Loading...</div>,
});

class App extends Component {
  constructor(props) {
    super(props);

    let width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

    this.state = {
      device: (width < 576) ? devices.MOBILE : ((width < 768) ? devices.TABLET : devices.DESKTOP)
    }
    console.log('screen', window.screen, ' : ', width);
  }

  render() {
    const { device } = this.state;

    return (
      <DeviceContext.Provider value={this.state}>
        <Router>
          <React.Fragment>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={(device === devices.DESKTOP) ? HomeDesktop : ((device === devices.TABLET) ? HomeTablet : HomeMobile)}/>
              <Route path="/about" component={About}/>
            </Switch>
          </React.Fragment>
        </Router>
      </DeviceContext.Provider>
    );
  }
}

export default App;
