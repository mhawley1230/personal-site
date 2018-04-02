import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
// import NoMatch from './pages/NoMatch.js';
import Resume from './pages/Resume.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <ul>
              <li>
                <Link to='/' component={Home}>Home</Link>
              </li>
              <li>
                <Link to='/blog' component={Blog}>Blog</Link>
              </li>
              <li>
                <Link to='/resume' component={Resume}>Resume</Link>
              </li>
            </ul>
          </div>

          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/resume' component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
