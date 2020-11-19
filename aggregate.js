const axios = require('axios');

const API_ENDPOINT_PILOT_ONLINE = "https://pilotonline.fi/api/public/traffic-info";
const API_ENDPOINT_DIGITRAFFIC = "https://meri.digitraffic.fi/api/v1/port-calls";

const debug_ports = ["FITOP", "FIOUO"];
const state_ignore_list = ["TOTEUTUNUT"];

async function getPilotAPI() {
    try {
        const response = await axios.get(API_ENDPOINT_PILOT_ONLINE);
        let data = response.data.pilotages;
        data = data.filter(d => !state_ignore_list.includes(d.state) && (
            debug_ports.includes(d.endCode) ||
            debug_ports.includes(d.startCode))
        );
        console.log(data.length);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function getDigiAPI() {
    try {
        const response = await axios.get(API_ENDPOINT_DIGITRAFFIC);
        let data = response.data.pilotages;
        data = data.filter(d => !state_ignore_list.includes(d.state) && (
            debug_ports.includes(d.endCode) ||
            debug_ports.includes(d.startCode))
        );
        console.log(data.length);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getPilotAPI();
