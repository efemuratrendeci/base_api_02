//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import fetch from 'node-fetch';
// ────────────────────────────────────────────────────────────────────────────────


class WebRequestService {
    fetch = async (url, options) => {
        let response = await fetch(url, { ...options, body: JSON.stringify(options.body) });
        return await response.json();
    }
}

export default WebRequestService;