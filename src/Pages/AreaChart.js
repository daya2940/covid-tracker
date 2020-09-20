import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
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

const Chart4 = ({areaData}) => {
  const data = [];
  areaData.data2.map(item => data.push(item.total));
  for (let i = 0; i < data.length; i++) {
    data[i].name = areaData.data1[i];
  }
    return (
      <AreaChart
        width={1200}
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
    );
}

export default Chart4
