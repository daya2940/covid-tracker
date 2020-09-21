import React, { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, LineChart, Line
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
const StateData = ({ stateData }) => {
  console.log(stateData);
  const data = [];
  if (stateData.length > 0) {
    const data1 = stateData.map(item => item[0]);
    const data2 = stateData.map(item => item[1].total);
    data2.map(item => data.push(item.total));
        // data[0].name = data1[0];
      console.log(data2);
      console.log(data2);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="deceased" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="confirmed" stackId="a" fill="#8884d8" />
              <Bar dataKey="deceased" stackId="a" fill="#82ca9d" />
              <Bar dataKey="recovered" fill="#8884d8" />
              <Bar dataKey="tested" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="deceased" stroke="#82ca9d" />
              <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
              <Line type="monotone" dataKey="tested" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="deceased" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="recovered" stackId="1" stroke="#8884d8" fill="#82ca9d" />
              <Area type="monotone" dataKey="tested" stackId="1" stroke="#8884d8" fill="#ffc658" />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}



export default StateData