import React from "react";
import "./InvestCal.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ slider1, slider2, slider3 }) => {
  const chartData = [
    { name: "", v1: slider1 + 10, v2: slider2 + 10, v3: slider3 + 10 },
    { name: "", v1: slider1 + 20, v2: slider2 + 20, v3: slider3 + 10 },
    { name: "", v1: slider1 + 30, v2: slider2 + 30, v3: slider3 + 10 },
    { name: "", v1: slider1 + 40, v2: slider2 + 40, v3: slider3 + 10 },
    { name: "", v1: slider1 + 50, v2: slider2 + 50, v3: slider3 + 10 },
  ];

  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={315}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            type="number"
            domain={[0, 300]}
            ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="v1" stackId="a" fill="#1A202C" barSize={50} />
          <Bar dataKey="v2" stackId="a" fill="#FFD147" />
          <Bar dataKey="v3" stackId="a" fill="#41CE8E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
