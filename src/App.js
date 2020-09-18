import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Report from './Pages/Report';

function App() { 
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/tables" component = {Report} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
