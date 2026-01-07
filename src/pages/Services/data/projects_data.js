export const projects = [
  {
    id: 'brand-book',
    title: 'Brand Book',
    description: "Generate a professional brand book PDF with your brand's colors and typography.",
    path: '/services/brand-book',
    status: 'BETA',      // Options: 'AVAILABLE', 'BETA', 'OFFLINE', 'DEV'
    icon: '🎨',
    category: 'Generator'
  },
  {
    id: 'gym-tracker',
    title: 'Gym Tracker',
    description: 'Log your workouts and track progress. Data is private and isolated per user.',
    path: '/services/gym-tracker',
    status: 'BETA',
    icon: '💪',
    category: 'Health'
  },
  {
    id: 'pdf-converter',
    title: 'PDF Converter',
    description: 'Secure client-side image to PDF conversion. No server uploads required.',
    path: '/services/pdf-converter',
    status: 'OFFLINE',
    icon: '📄',
    category: 'Utility'
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description: 'Validate, prettify, and minify JSON data strings instantly.',
    path: '/services/json-formatter',
    status: 'OFFLINE',
    icon: 'DATA',
    category: 'DevTool'
  },
  {
    id: 'morse-decoder',
    title: 'Morse Decoder',
    description: 'Audio-to-text decoder for CW signals using Web Audio API.',
    path: '/services/morse-decoder',
    status: 'DEV',
    icon: '📻',
    category: 'DSP'
  }
];

// Helper to get CSS class based on status
export const getStatusClass = (status) => {
  switch (status) {
    case 'AVAILABLE': return 'status-active';
    case 'BETA': return 'status-beta';
    case 'OFFLINE': return 'status-offline';
    case 'DEV': return 'status-offline'; // Or make a purple 'status-dev' class
    default: return '';
  }
};