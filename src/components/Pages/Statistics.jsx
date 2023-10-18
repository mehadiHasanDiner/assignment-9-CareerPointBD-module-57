import React from "react";
import Header from "../Layout/Header";
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const Statistics = () => {
  const assignments = [
    {
      assignmentID: 1,
      assignmentNumber: 50,
      assignmentName: "Assignment 1",
    },
    {
      assignmentID: 2,
      assignmentNumber: 57,
      assignmentName: "Assignment 2",
    },
    {
      assignmentID: 3,
      assignmentNumber: 58,
      assignmentName: "Assignment 3",
    },
    {
      assignmentID: 4,
      assignmentNumber: 0,
      assignmentName: "Assignment 4",
    },
    {
      assignmentID: 5,
      assignmentNumber: 30,
      assignmentName: "Assignment 5",
    },
    {
      assignmentID: 6,
      assignmentNumber: 30,
      assignmentName: "Assignment 6",
    },
    {
      assignmentID: 7,
      assignmentNumber: 27,
      assignmentName: "Assignment 7",
    },
  ];

  return (
    <div>
      <Header>Assignment Statistics in Graph chart </Header>
      <div className="w-full mt-8 flex items-center justify-center">
        <AreaChart
          width={1200}
          height={400}
          data={assignments}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="assignmentName" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="assignmentID"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="assignmentNumber"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
