import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  const COLORS = ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5'];

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400} margin={{
        top: 20, right: 0, bottom: 20, left: 20,
      }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))} */}
        </Pie>
      </PieChart>
      {/* <Legend align="right" height={36} /> */}
    </ResponsiveContainer>
  )
}

export default EventGenre;