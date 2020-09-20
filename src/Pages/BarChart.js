import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart2 = ({ barData }) => {
  const data = [];
  barData.data2.map(item => data.push(item.total));
  for (let i = 0; i < data.length; i++) {
    data[i].name = barData.data1[i];
  }

  return (
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
  );
}
export default Chart2
