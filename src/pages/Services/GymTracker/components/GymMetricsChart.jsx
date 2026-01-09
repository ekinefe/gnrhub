import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GymMetricsChart = ({ sessions }) => {
    const [metric, setMetric] = useState('body_weight'); // 'body_weight', 'bmi', 'bfi'

    // Process Data
    const chartData = useMemo(() => {
        if (!sessions || sessions.length === 0) return [];

        const data = [...sessions]
            .reverse() // Sort Oldest -> Newest (assuming input is Newest -> Oldest)
            .map(s => {
                // 1. DATA SANITIZATION
                let rawVal = s[metric];

                // Handle potential null/undefined
                if (rawVal === null || rawVal === undefined) rawVal = 0;

                // Force conversion to float
                const val = parseFloat(rawVal);

                // Create clean data point
                return {
                    date: new Date(s.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                    fullDate: s.created_at, // useful for tooltips if needed
                    value: isNaN(val) ? 0 : val
                };
            })
            // 2. FILTER INVALID DATA (remove 0s or NaNs to avoid flatlining at 0)
            .filter(point => point.value > 0);

        // 3. DEBUG LOG
        console.log(`[GymMetricsChart] Rendered ${metric}:`, data);

        return data;
    }, [sessions, metric]);

    const getLabel = () => {
        if (metric === 'body_weight') return 'WEIGHT (KG)';
        if (metric === 'bmi') return 'BMI';
        if (metric === 'bfi') return 'BFI %';
    };

    const getColor = () => {
        if (metric === 'body_weight') return '#FF318C';
        if (metric === 'bmi') return '#00ff9d';
        if (metric === 'bfi') return '#00d0ff';
        return '#fff';
    };

    return (
        <div className="tech-card" style={{ marginBottom: '2rem', minHeight: '350px' }}>

            {/* Header & Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0, color: getColor() }}>/ {getLabel()}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => setMetric('body_weight')}
                        style={{
                            background: metric === 'body_weight' ? 'rgba(255, 49, 140, 0.1)' : 'transparent',
                            color: metric === 'body_weight' ? '#FF318C' : '#666',
                            border: '1px solid',
                            borderColor: metric === 'body_weight' ? '#FF318C' : '#333',
                            padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        KG
                    </button>
                    <button
                        onClick={() => setMetric('bmi')}
                        style={{
                            background: metric === 'bmi' ? 'rgba(0, 255, 157, 0.1)' : 'transparent',
                            color: metric === 'bmi' ? '#00ff9d' : '#666',
                            border: '1px solid',
                            borderColor: metric === 'bmi' ? '#00ff9d' : '#333',
                            padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        BMI
                    </button>
                    <button
                        onClick={() => setMetric('bfi')}
                        style={{
                            background: metric === 'bfi' ? 'rgba(0, 208, 255, 0.1)' : 'transparent',
                            color: metric === 'bfi' ? '#00d0ff' : '#666',
                            border: '1px solid',
                            borderColor: metric === 'bfi' ? '#00d0ff' : '#333',
                            padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                        }}
                    >
                        BFI
                    </button>
                </div>
            </div>

            {/* The Chart Container */}
            <div style={{ height: '250px', width: '100%' }}>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                            <XAxis
                                dataKey="date"
                                stroke="#666"
                                tick={{ fontSize: 10, fill: '#666' }}
                                tickMargin={10}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#666"
                                domain={['auto', 'auto']}
                                tick={{ fontSize: 10, fill: '#666' }}
                                width={30}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#000', border: `1px solid ${getColor()}` }}
                                itemStyle={{ color: getColor() }}
                                labelStyle={{ color: '#888', marginBottom: '0.2rem' }}
                                cursor={{ stroke: '#333', strokeWidth: 1 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={getColor()}
                                strokeWidth={2}
                                dot={{ fill: '#000', stroke: getColor(), strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: getColor() }}
                                isAnimationActive={true}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#444' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📉</div>
                        <div>NO_DATA_LOGGED</div>
                        <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>Add {getLabel()} to your sessions to see the graph.</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GymMetricsChart;