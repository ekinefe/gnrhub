import { parse } from 'cookie';

// Helper to encode ArrayBuffer to Base64 URL-safe string
function arrayBufferToBase64Url(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Helper to decode Base64 URL-safe string to Uint8Array
function base64UrlToUint8Array(base64Url) {
    const padding = '='.repeat((4 - (base64Url.length % 4)) % 4);
    const base64 = (base64Url + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Import key from secret string
async function importKey(secret) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    return await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign', 'verify']
    );
}

/**
 * Signs data using HMAC-SHA256
 * @param {Object} data - The data to sign
 * @param {string} secret - The secret key
 * @returns {Promise<string>} - The signed token (base64Url(data).base64Url(signature))
 */
export async function sign(data, secret) {
    const key = await importKey(secret);
    const encoder = new TextEncoder();
    const dataStr = JSON.stringify(data);
    const dataBase64 = arrayBufferToBase64Url(encoder.encode(dataStr));

    const signature = await crypto.subtle.sign(
        'HMAC',
        key,
        encoder.encode(dataBase64) // Sign the Base64 representation to ensure integrity of the payload string
    );

    const signatureBase64 = arrayBufferToBase64Url(signature);
    return `${dataBase64}.${signatureBase64}`;
}

/**
 * Verifies a signed token
 * @param {string} token - The token to verify
 * @param {string} secret - The secret key
 * @returns {Promise<Object|null>} - The decoded data if valid, null otherwise
 */
export async function verify(token, secret) {
    if (!token || !secret) return null;

    const [dataBase64, signatureBase64] = token.split('.');
    if (!dataBase64 || !signatureBase64) return null;

    try {
        const key = await importKey(secret);
        const encoder = new TextEncoder();
        const signature = base64UrlToUint8Array(signatureBase64);

        const isValid = await crypto.subtle.verify(
            'HMAC',
            key,
            signature,
            encoder.encode(dataBase64)
        );

        if (!isValid) return null;

        const dataJson = new TextDecoder().decode(base64UrlToUint8Array(dataBase64));
        return JSON.parse(dataJson);
    } catch (err) {
        console.error('Token verification failed:', err);
        return null;
    }
}

/**
 * Extracts the auth token from the request cookies
 * @param {Request} request 
 * @returns {string|null}
 */
export function getTokenFromRequest(request) {
    const cookieHeader = request.headers.get('Cookie');
    if (!cookieHeader) return null;

    const cookies = parse(cookieHeader);
    return cookies.auth_token || null;
}
