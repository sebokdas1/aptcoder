import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Area, Tooltip, XAxis, YAxis, Line, LineChart, PieChart, Pie } from 'recharts';
import './Barchart.css'

const Barchart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='dashboard'>
            <div className='chart-container'>
                <div className='chart'>
                    <BarChart width={320} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="investment" fill="RoyalBlue" />
                    </BarChart>
                    <h2>Total Year Investment in Barchart</h2>
                </div>

                <div className='chart'>
                    <PieChart width={320} height={250}>
                        <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="Turquoise" />
                        <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                    <h2>Total sell in piechart</h2>
                </div>

                <div className='chart'>
                    <LineChart width={320} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="skyblue" />
                    </LineChart>
                    <h2>Total year revenue in Linechart</h2>
                </div>

                <div className='chart'>
                    <ComposedChart width={320} height={250} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="green" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                    </ComposedChart>
                    <h2>Total Year sell and revenue in RadialBarchat</h2>
                </div>
            </div>
        </div>
    );
};

export default Barchart;