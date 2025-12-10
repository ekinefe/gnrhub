export const getStatusClass = (status) => {
    switch (status) {
        case 'Active': return 'status-active';
        case 'Beta': return 'status-beta';
        case 'Offline': return 'status-offline';
        default: return '';
    }
};
