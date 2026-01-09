import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GymMetricsChart = ({ sessions }) => {
    const [metric, setMetric] = useState('body_weight'); // 'body_weight', 'bmi', 'bfi'

    // Process Data: Sort by Date Ascending & Filter empty values
    const chartData = useMemo(() => {
        return [...sessions]
            .reverse() // API sends DESC, we need ASC for time series
            .filter(s => s[metric] && s[metric] > 0) // Remove empty entries
            .map(s => ({
                date: new Date(s.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                value: s[metric]
            }));
    }, [sessions, metric]);

    const getLabel = () => {
        if (metric === 'body_weight') return 'WEIGHT (KG)';
        if (metric === 'bmi') return 'BMI';
        if (metric === 'bfi') return 'BFI %';
    };

    const getColor = () => {
        if (metric === 'body_weight') return '#FF318C'; // Accent Pink
        if (metric === 'bmi') return '#00ff9d'; // Tech Green
        if (metric === 'bfi') return '#00d0ff'; // Cyan
    };

    return (
        <div className="tech-card" style={{ marginBottom: '2rem', minHeight: '300px' }}>

            {/* Header & Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0, color: getColor() }}>/ {getLabel()}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => setMetric('body_weight')}
                        style={{
                            background: metric === 'body_weight' ? '#FF318C' : 'transparent',
                            color: metric === 'body_weight' ? '#000' : '#666',
                            border: '1px solid #FF318C', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        KG
                    </button>
                    <button
                        onClick={() => setMetric('bmi')}
                        style={{
                            background: metric === 'bmi' ? '#00ff9d' : 'transparent',
                            color: metric === 'bmi' ? '#000' : '#666',
                            border: '1px solid #00ff9d', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        BMI
                    </button>
                    <button
                        onClick={() => setMetric('bfi')}
                        style={{
                            background: metric === 'bfi' ? '#00d0ff' : 'transparent',
                            color: metric === 'bfi' ? '#000' : '#666',
                            border: '1px solid #00d0ff', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        BFI
                    </button>
                </div>
            </div>

            {/* The Chart */}
            <div style={{ height: '250px', width: '100%' }}>
                {chartData.length > 1 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                            <XAxis
                                dataKey="date"
                                stroke="#666"
                                tick={{ fontSize: 10 }}
                                tickMargin={10}
                            />
                            <YAxis
                                stroke="#666"
                                domain={['auto', 'auto']}
                                tick={{ fontSize: 10 }}
                                width={30}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#000', border: `1px solid ${getColor()}` }}
                                itemStyle={{ color: getColor() }}
                                labelStyle={{ color: '#888', marginBottom: '0.5rem' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={getColor()}
                                strokeWidth={2}
                                dot={{ fill: '#000', stroke: getColor(), strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: getColor() }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                        [INSUFFICIENT_DATA_FOR_GRAPH]
                    </div>
                )}
            </div>
        </div>
    );
};

export default GymMetricsChart;