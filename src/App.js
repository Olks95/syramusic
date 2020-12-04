import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Releases from './components/Releases.js';
import Shows from './components/Shows.js';
import Contact from './components/Contact.js';
import SocialFollow from './components/SocialFollow.js';
import LinkTree from './components/LinkTree.js';

// Font imports
import './fonts/Arenq.ttf';
import './fonts/Arenq.woff';
import './fonts/LABTG.ttf';

// Stylesheet
import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
          <Nav />
        </header>
        
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper App-main"
           >
            <Route path="/" exact component={Home} />
            <Route path="/releases" component={Releases} />
            <Route path="/shows" component={Shows} />
            <Route path="/contact" component={Contact} />
            <Route path="/linktree" component={LinkTree} />
          </AnimatedSwitch>
        
        <footer className="App-footer">
          <SocialFollow/>
        </footer>

      </div>
    </Router>
  );
}

export default App;
