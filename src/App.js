import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Report from './Pages/Report';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowData from './component/showData';
import axios from 'axios';


function App() {

  const [value, setValue] = useState({
    data1: [],
    data2: []
  });

  useEffect(() => {
    axios.get('https://api.covid19india.org/v4/data.json')
      .then((res, err) => {
        if (err) {
          console.log(err);
        }
        else {
          const data1 = Object.entries(res.data).map(item => item[0]);
          const data2 = Object.entries(res.data).map(item => item[1]);
          setValue({ data1: data1, data2 });
        }
      })
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/tables" component={Report} />
          <Route path="/stateData" render={props => (
            <ShowData stateData={value} />
          )
          } />

        </Switch>
      </Router>
    </div>

  );
}

export default App;
