import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, LineChart, Line
} from 'recharts';

const StateData = ({ stateData }) => {
  console.log(stateData);
  const data = [];
  if (stateData.length > 0) {
    // const data1 = stateData.map(item => item[0]);
    const data2 = stateData.map(item => item[1].total);
    data2.map(item => data.push(item.total));
        // data[0].name = data1[0];
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