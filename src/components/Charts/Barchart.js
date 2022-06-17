import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../CustomHook/useData';

const Barchart = () => {
    const [data] = useData([])

    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill="#8884d8" />
        </BarChart>
    );
};

export default Barchart;