import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Report from './Pages/Report';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowData from './component/showData';
import axios from 'axios';
import StateData from './component/stateData';

function App() {

  const [value, setValue] = useState({
    data1: [],
    data2: [],
  });
  const [navno, setNavNo] = useState(0);
  const [data,setData] = useState({
    datax1: [],
  })

  const handler = (index) => {
    setNavNo(index);
    setData({datax:Object.entries(data2[navno].districts)});
  };

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

  const {data2} = value;
  return (
    <div>
      <Router>
        <Navbar handler={handler} />
        <Switch>
          <Route path="/tables" render={props =>(
            <Report reportData={value} />
          )} />
          <Route path="/stateData" render={props => (
            <ShowData stateData={value} />
          )
          } />
          <Route path="/state" render={props => (
            <StateData stateData={data} />
          )} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
