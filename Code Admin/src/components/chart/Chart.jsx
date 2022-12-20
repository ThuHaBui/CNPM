import './chart.scss'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: "June",Total:1200},
  {name: "July",Total:2100},
  {name: "August",Total:800},
  {name: "September",Total:1600},
  {name: "October",Total:900},
  {name: "November",Total:1700},

];
const Chart = ({aspect,title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <YAxis/>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart