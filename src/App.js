import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import {DeviceContext, devices} from './contexts/device-context';

/* Header Components */
const HeaderDesktop = Loadable({
  loader: () => import('./components/Desktop/Header'),
  loading: () => null,
});
const HeaderTablet = Loadable({
  loader: () => import('./components/Tablet/Header'),
  loading: () => null,
});
const HeaderMobile = Loadable({
  loader: () => import('./components/Mobile/Header'),
  loading: () => null,
});
/* End Header */

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

    this.navItems = [
      {
        link: '/',
        name: 'Home'
      },
      {
        link: '/about',
        name: 'About'
      }
    ];
    console.log('screen', window.screen, ' : ', width);
  }

  render() {
    const { device } = this.state;

    return (
      <DeviceContext.Provider value={this.state}>
        <Router>
          <React.Fragment>
            {
              (device === devices.DESKTOP) ? (
                <HeaderDesktop navItems={this.navItems}/>
              ) : (
                (device === devices.TABLET) ? <HeaderTablet navItems={this.navItems}/> : <HeaderMobile navItems={this.navItems}/>
              )
            }
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={(device === devices.DESKTOP) ? HomeDesktop : ((device === devices.TABLET) ? HomeTablet : HomeMobile)}/>
                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </DeviceContext.Provider>
    );
  }
}

export default App;
