import React, { createContext, useState, useContext } from 'react';

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
    const [brandData, setBrandData] = useState({
        brandName: "GNRHUB_",
        brandSlogan: "Innovating the Future",

        company: {
            mission: "To document projects, schematics, code, and notes for the open web.",
            vision: "A world where knowledge and tools are accessible to everyone."
        },

        assets: {
            logos: []
        },

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

        // === NEW: CONTACT & SOCIALS ===
        contact: {
            email: "contact@gnrhub.com",
            phone: "",
            website: "gnrhub.com",
            address: ""
        },
        socials: [
            { id: 1, platform: "GitHub", url: "github.com/gnrhub" },
            { id: 2, platform: "LinkedIn", url: "linkedin.com/company/gnrhub" }
        ],

        colors: {
            primary: "#FF318C",
            secondary: "#333333",
            background: "#050505",
            text: "#eeeeee",
            secondaryText: "#888888"
        },

        typography: {
            fontFamily: 'JetBrains Mono',
            url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap'
        },

        voice: {
            keywords: "Futuristic, Technical, Open-Source", // Default values
            description: "We prioritize clarity and code over marketing fluff. Our voice is direct, educational, and empowers builders."
        },

        skips: {
            brandName: false,
            brandSlogan: false,
            mission: false,
            vision: false,
            team: false,
            contact: false, // <--- NEW SKIP
            primary: false,
            secondary: false,
            background: false,
            text: false,
            secondaryText: false,
            typography: false,
            logo: false,
            voice: false
        }
    });

    // --- UPDATERS ---
    const updateBrand = (key, value) => setBrandData(prev => ({ ...prev, [key]: value }));
    const updateColor = (key, val) => setBrandData(prev => ({ ...prev, colors: { ...prev.colors, [key]: val } }));
    const updateFont = (font) => setBrandData(prev => ({ ...prev, typography: { fontFamily: font.name, url: font.url } }));
    const toggleSkip = (key) => setBrandData(prev => ({ ...prev, skips: { ...prev.skips, [key]: !prev.skips[key] } }));

    // Company
    const updateCompany = (key, val) => setBrandData(prev => ({ ...prev, company: { ...prev.company, [key]: val } }));

    // Assets
    const addLogo = (file) => {
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setBrandData(prev => ({
                ...prev,
                assets: { logos: [...(prev.assets.logos || []), { id: Date.now(), preview: objectUrl, label: "Primary Logo" }] }
            }));
        }
    };
    const removeLogo = (id) => setBrandData(prev => ({ ...prev, assets: { logos: prev.assets.logos.filter(l => l.id !== id) } }));
    const updateLogoLabel = (id, label) => setBrandData(prev => ({
        ...prev, assets: { logos: prev.assets.logos.map(l => l.id === id ? { ...l, label } : l) }
    }));

    // Team
    const addTeamMember = () => setBrandData(prev => ({
        ...prev, team: [...prev.team, { id: Date.now(), name: "New Member", title: "Role", bio: "Bio...", Contact: "", link1: "", link2: "" }]
    }));
    const removeTeamMember = (id) => setBrandData(prev => ({ ...prev, team: prev.team.filter(m => m.id !== id) }));
    const updateTeamMember = (id, key, val) => setBrandData(prev => ({
        ...prev, team: prev.team.map(m => m.id === id ? { ...m, [key]: val } : m)
    }));

    // === NEW: CONTACT UPDATERS ===
    const updateContactInfo = (key, val) => {
        setBrandData(prev => ({ ...prev, contact: { ...prev.contact, [key]: val } }));
    };

    const addSocial = () => {
        setBrandData(prev => ({
            ...prev, socials: [...prev.socials, { id: Date.now(), platform: "Platform", url: "Link" }]
        }));
    };
    const removeSocial = (id) => {
        setBrandData(prev => ({ ...prev, socials: prev.socials.filter(s => s.id !== id) }));
    };
    const updateSocial = (id, key, val) => {
        setBrandData(prev => ({
            ...prev, socials: prev.socials.map(s => s.id === id ? { ...s, [key]: val } : s)
        }));
    };
    const updateVoice = (key, val) => {
        setBrandData(prev => ({
            ...prev,
            voice: { ...prev.voice, [key]: val }
        }));
    };

    return (
        <BrandContext.Provider value={{
            brandData, updateBrand, updateColor, updateFont, toggleSkip, updateCompany,
            addTeamMember, removeTeamMember, updateTeamMember,
            addLogo, removeLogo, updateLogoLabel,
            updateContactInfo, addSocial, removeSocial, updateSocial,
            updateVoice
        }}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrand = () => useContext(BrandContext);