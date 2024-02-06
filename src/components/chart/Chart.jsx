import React from 'react'
import './Chart.css'
import {ResponsiveContainer,LineChart,Line,XAxis,CartesianGrid,Tooltip} from 'recharts'

export default function Chart({data,datakey,grid}) {
  return (
    <>
    <ResponsiveContainer width="100%">
        <LineChart data={data}>
            <XAxis dataKey="name" stroke='#acacac' />
            <Line type="monotone" dataKey={datakey} stroke="#30ccff" />
            <Tooltip className="chart-tooltip" />
            {grid && <CartesianGrid stroke='#454545' strokeDasharray="2" />}
        </LineChart>
    </ResponsiveContainer>
    </>
  )
}
