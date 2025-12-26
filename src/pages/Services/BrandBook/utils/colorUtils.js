// src/utils/colorUtils.js

// 1. PRIMARY PRESETS (The "Drivers")
// These are the starting points users can choose from.
export const PRIMARY_OPTIONS = [
    '#3b82f6', // Blue (Default)
    '#ef4444', // Red
    '#10b981', // Emerald Green
    '#8b5cf6', // Purple
    '#f59e0b', // Amber/Orange
];

// 2. THEME ENGINE
// Based on the 'seed' (Primary) color, return matching sets for others.
export const generateTheme = (primaryHex) => {
    const p = primaryHex.toLowerCase();

    // --- SCENARIO A: BLUE THEME ---
    if (['#3b82f6', '#007bff', '#2563eb', 'blue'].includes(p)) {
        return {
            secondary: ['#64748b', '#94a3b8', '#1e3a8a', '#0ea5e9', '#f97316'], // Slate, Dark Blue, Sky, Orange (Complementary)
            background: ['#ffffff', '#f8fafc', '#eff6ff', '#f0f9ff', '#f1f5f9'], // White, Slate-50, Blue-50
            text: ['#0f172a', '#1e293b', '#172554', '#334155', '#000000'],  // Slate-900, Blue-950
            secondaryText: ['#64748b', '#94a3b8', '#475569', '#64748b', '#737373'] // Muted Blues/Grays
        };
    }

    // --- SCENARIO B: RED THEME ---
    if (['#ef4444', '#dc2626', '#b91c1c', 'red'].includes(p)) {
        return {
            secondary: ['#7f1d1d', '#fca5a5', '#4b5563', '#fdba74', '#1f2937'], // Dark Red, Light Red, Gray, Orange
            background: ['#ffffff', '#fef2f2', '#fff1f2', '#fafaf9', '#f3f4f6'], // White, Red-50, Rose-50, Warm Gray
            text: ['#450a0a', '#881337', '#1f2937', '#000000', '#374151'],  // Red-950, Rose-900, Gray-800
            secondaryText: ['#7f1d1d', '#991b1b', '#6b7280', '#525252', '#6b7280'] // Muted Reds/Grays
        };
    }

    // --- SCENARIO C: GREEN THEME ---
    if (['#10b981', '#059669', 'green'].includes(p)) {
        return {
            secondary: ['#064e3b', '#6ee7b7', '#3f6212', '#facc15', '#374151'], // Dark Green, Mint, Olive, Yellow
            background: ['#ffffff', '#f0fdf4', '#f7fee7', '#fafafa', '#ecfccb'], // Green-50, Lime-50
            text: ['#022c22', '#14532d', '#1a2e05', '#111827', '#000000'],  // Green-950
            secondaryText: ['#064e3b', '#166534', '#4b5563', '#374151', '#525252'] // Muted Greens/Grays
        };
    }

    // --- SCENARIO D: PURPLE THEME ---
    if (['#8b5cf6', '#7c3aed', 'purple'].includes(p)) {
        return {
            secondary: ['#4c1d95', '#c4b5fd', '#db2777', '#1f2937', '#e879f9'], // Dark Purple, Lavender, Pink
            background: ['#ffffff', '#f5f3ff', '#faf5ff', '#fafafa', '#f3f4f6'], // Violet-50
            text: ['#2e1065', '#4c1d95', '#111827', '#000000', '#374151'],
            secondaryText: ['#581c87', '#6b21a8', '#4b5563', '#374151', '#6b7280']
        };
    }

    // --- SCENARIO E: AMBER/ORANGE THEME ---
    if (['#f59e0b', '#d97706', 'orange'].includes(p)) {
        return {
            secondary: ['#78350f', '#fcd34d', '#14b8a6', '#4b5563', '#a8a29e'], // Brown, Yellow, Teal, Stone
            background: ['#ffffff', '#fffbeb', '#fff7ed', '#fafaf9', '#fef3c7'], // Amber-50, Orange-50
            text: ['#451a03', '#78350f', '#1c1917', '#000000', '#292524'],
            secondaryText: ['#78350f', '#92400e', '#57534e', '#4b5563', '#78716c']
        };
    }

    // --- DEFAULT FALLBACK (Neutrals) ---
    return {
        secondary: ['#64748b', '#9ca3af', '#000000', '#ffffff', '#cbd5e1'],
        background: ['#ffffff', '#f8fafc', '#f3f4f6', '#fffbeb', '#fafafa'],
        text: ['#0f172a', '#111827', '#1e293b', '#374151', '#000000'],
        secondaryText: ['#475569', '#64748b', '#94a3b8', '#6b7280', '#525252']
    };
};