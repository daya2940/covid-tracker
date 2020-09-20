import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart1 = ({ lineData }) => {
  const data = [];
  lineData.data2.map(item => data.push(item.total));
  for (let i = 0; i < data.length; i++) {
    data[i].name = lineData.data1[i];
  }
  console.log(data);

  return (
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
    </LineChart>
  );
}
export default Chart1