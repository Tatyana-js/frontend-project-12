import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/src/components/Home.jsx">
            <Home />
          </Route>
          <Route path="/src/components/About.jsx">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// const App = () => <h1>Hexlet Chat</h1>;

// export default App;