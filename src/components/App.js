import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import NoMatch from './pages/NoMatch.js';
import Resume from './pages/Resume.js';

// import '../../js/materialize.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>
              </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>

            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/blog' component={Blog} />
                <Route path='/resume' component={Resume} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
