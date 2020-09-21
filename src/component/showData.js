import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, LineChart, Line
} from 'recharts';


const ShowData = ({ stateData }) => {
  const data = [];
  stateData.data2.map(item => data.push(item.total));
  for (let i = 0; i < data.length; i++) {
    data[i].name = stateData.data1[i];
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <LineChart
              width={1200}
              height={500}
              data={data}
              margin={{
                top: 5, right: 60, left: 80, bottom: 5,
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
            </LineChart>          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <BarChart
              width={1200}
              height={500}
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
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
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <AreaChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 10, right: 20, left: 2, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 2" />
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
  )
}

export default ShowData
