const request = require("request");
const {Signale} = require('signale');
const options = {
    disabled: false,
    interactive: false,
    logLevel: 'info',
    scope: '',
    secrets: [],
    stream: process.stdout,
    types: {
        name: {
            badge: '🛰️',
            color: 'red',
            label: '',
            logLevel: 'info'
        },
        underline: {
            badge: '',
            color: '',
            label: '',
            logLevel: 'info'
        },
        latitude: {
            badge: '🌎',
            color: 'blue',
            label: 'latitude:',
            logLevel: 'info'
        },
        longitude: {
            badge: '🌎',
            color: 'blue',
            label: 'longitude:',
            logLevel: 'info'
        },
        altitude: {
            badge: '🔺',
            color: 'blue',
            label: 'altitude:',
            logLevel: 'info'
        },
        velocity: {
            badge: '💨',
            color: 'blue',
            label: 'velocity:',
            logLevel: 'info'
        },
        visibility: {
            badge: '🌓',
            color: 'blue',
            label: 'visibility:',
            logLevel: 'info'
        },
    }
};
const custom = new Signale(options);
async function getISSData() {
    setInterval(() => {
        request("https://api.wheretheiss.at/v1/satellites/25544", function(error, response, body) {
            if (!error && response.statusCode === 200) {
                const data = JSON.parse(body);
                const lat = data.latitude;
                const lon = data.longitude;
                const alt = data.altitude;
                const vel = data.velocity;
                const vis = data.visibility;
                console.clear()
                custom.name("ISS TRACKING")
                custom.underline(" ");
                custom.latitude(lat);
                custom.longitude(lon);
                custom.altitude(alt);
                custom.velocity(vel);
                custom.visibility(vis);
            }
        });
    }, 1000);
}
getISSData();