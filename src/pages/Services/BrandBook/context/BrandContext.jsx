import React, { createContext, useState, useContext } from 'react';

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
    const [brandData, setBrandData] = useState({
        brandName: "GNRHUB_",
        brandSlogan: "Innovating the Future",

        // --- COMPANY INFO ---
        company: {
            mission: "To document projects, schematics, code, and notes for the open web.",
            vision: "A world where knowledge and tools are accessible to everyone."
        },

        // --- ASSETS (Fixed Structure) ---
        assets: {
            logos: [] // Array of { id, preview, label }
        },

        // --- TEAM MEMBERS ---
        team: [
            {
                id: 1,
                name: "Ekin Efe Gungor",
                title: "Full Stack Developer",
                bio: "CS student & maker focused on AI, Data Science, and embedded systems.",
                Contact: "contact@gnrhub.com",
                link1: "github.com/ekinefegungor",
                link2: "gnrhub.com"
            }
        ],

        // --- COLORS ---
        colors: {
            primary: "#FF318C",      // --accent (Cyber Pink)
            secondary: "#333333",    // --border (Dark Grey)
            background: "#050505",   // --bg-dark (Black)
            text: "#eeeeee",         // --text-main (Off-White)
            secondaryText: "#888888" // Muted text
        },

        typography: {
            fontFamily: 'JetBrains Mono',
            url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap'
        },

        // --- SKIPS ---
        skips: {
            brandName: false,
            brandSlogan: false,
            mission: false,
            vision: false,
            team: false,
            primary: false,
            secondary: false,
            background: false,
            text: false,
            secondaryText: false,
            typography: false,
            logo: false
        }
    });

    // --- GENERAL UPDATERS ---
    const updateBrand = (key, value) => {
        setBrandData((prev) => ({ ...prev, [key]: value }));
    };

    const updateColor = (colorName, hexValue) => {
        setBrandData((prev) => ({
            ...prev, colors: { ...prev.colors, [colorName]: hexValue }
        }));
    };

    const updateFont = (fontObj) => {
        setBrandData((prev) => ({
            ...prev, typography: { fontFamily: fontObj.name, url: fontObj.url }
        }));
    };

    const toggleSkip = (key) => {
        setBrandData((prev) => ({
            ...prev, skips: { ...prev.skips, [key]: !prev.skips[key] }
        }));
    };

    const updateCompany = (field, value) => {
        setBrandData(prev => ({
            ...prev,
            company: { ...prev.company, [field]: value }
        }));
    };

    // --- LOGO ACTIONS (Fixed) ---
    const addLogo = (file) => {
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            const newLogo = {
                id: Date.now(),
                preview: objectUrl,
                label: "Primary Logo" // Default label
            };
            // Ensure logos array exists before spreading
            setBrandData(prev => ({
                ...prev,
                assets: { logos: [...(prev.assets.logos || []), newLogo] }
            }));
        }
    };

    const removeLogo = (id) => {
        setBrandData(prev => ({
            ...prev,
            assets: { logos: prev.assets.logos.filter(l => l.id !== id) }
        }));
    };

    const updateLogoLabel = (id, newLabel) => {
        setBrandData(prev => ({
            ...prev,
            assets: {
                logos: prev.assets.logos.map(l => l.id === id ? { ...l, label: newLabel } : l)
            }
        }));
    };

    // --- TEAM ACTIONS ---
    const addTeamMember = () => {
        const newMember = {
            id: Date.now(),
            name: "New Member",
            title: "Role",
            bio: "Short bio here...",
            Contact: "",
            link1: "",
            link2: ""
        };
        setBrandData(prev => ({
            ...prev, team: [...prev.team, newMember]
        }));
    };

    const removeTeamMember = (id) => {
        setBrandData(prev => ({
            ...prev, team: prev.team.filter(m => m.id !== id)
        }));
    };

    const updateTeamMember = (id, field, value) => {
        setBrandData(prev => ({
            ...prev,
            team: prev.team.map(m => m.id === id ? { ...m, [field]: value } : m)
        }));
    };

    return (
        <BrandContext.Provider value={{
            brandData,
            updateBrand,
            updateColor,
            updateFont,
            toggleSkip,
            updateCompany,
            addTeamMember,
            removeTeamMember,
            updateTeamMember,
            addLogo,
            removeLogo,
            updateLogoLabel
        }}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrand = () => useContext(BrandContext);