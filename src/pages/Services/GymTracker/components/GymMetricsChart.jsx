import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GymMetricsChart = ({ sessions }) => {
    const [metric, setMetric] = useState('body_weight');

    // Process Data
    const chartData = useMemo(() => {
        if (!sessions || sessions.length === 0) return [];

        const data = [...sessions]
            .reverse() // Sort Oldest -> Newest
            .map(s => {
                // FORCE NUMBER CONVERSION
                const rawVal = s[metric];
                const numVal = parseFloat(rawVal);

                return {
                    date: new Date(s.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                    // If parsing fails or is 0, return null so Recharts ignores it
                    value: (!isNaN(numVal) && numVal > 0) ? numVal : null
                };
            })
            .filter(point => point.value !== null); // Remove invalid points

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
        // 1. HARD-CODED HEIGHT HERE TO FIX "height(-1)" ERROR
        <div className="tech-card" style={{ marginBottom: '2rem', height: '350px', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem', flexShrink: 0 }}>
                <h3 style={{ margin: 0, color: getColor() }}>/ {getLabel()}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['body_weight', 'bmi', 'bfi'].map((m) => (
                        <button
                            key={m}
                            onClick={() => setMetric(m)}
                            style={{
                                background: metric === m ? `${getColor()}20` : 'transparent',
                                color: metric === m ? getColor() : '#666',
                                border: `1px solid ${metric === m ? getColor() : '#333'}`,
                                padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem'
                            }}
                        >
                            {m === 'body_weight' ? 'KG' : m.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Container - Forces chart to fill remaining space */}
            <div style={{ flex: 1, minHeight: 0, width: '100%', position: 'relative' }}>
                {chartData.length > 0 ? (
                    // 2. ABSOLUTE POSITIONING HACK
                    // This forces ResponsiveContainer to find the parent's dimensions correctly
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    stroke="#666"
                                    tick={{ fontSize: 10, fill: '#666' }}
                                    tickMargin={10}
                                />
                                <YAxis
                                    stroke="#666"
                                    domain={['dataMin - 1', 'dataMax + 1']} // Auto scale based on data
                                    tick={{ fontSize: 10, fill: '#666' }}
                                    width={30}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: `1px solid ${getColor()}` }}
                                    itemStyle={{ color: getColor() }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={getColor()}
                                    strokeWidth={3}
                                    dot={{ fill: '#000', stroke: getColor(), strokeWidth: 2, r: 4 }}
                                    activeDot={{ r: 6, fill: getColor() }}
                                    isAnimationActive={false} // Disable animation to debug easier
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                        [NO_DATA_AVAILABLE]
                    </div>
                )}
            </div>
        </div>
    );
};

export default GymMetricsChart;