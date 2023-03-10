# isstracking-cli

![screen](https://zupimages.net/up/23/02/5lis.png)

This script uses the [wheretheiss.at API](https://wheretheiss.at/w/developer) to retrieve data about the International Space Station (ISS) and display it in the console. It uses the npm package [Signale](https://github.com/klaussinani/signale) to format and color the output.

## Getting Started

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Run the script with `node isstracking.js`.

### Usage

The script will continuously retrieve data from the API and display it in the console. The data includes the following fields:

- Latitude
- Longitude
- Altitude
- Velocity
- Visibility

Each field is labeled and color-coded for easy reading. The script also clears the console each time the data is updated.

### Customizing

You can customize the output by modifying the options passed to the Signale constructor in the script. For example, you can change the color and badge of each field by modifying the 'color' and 'badge' properties in the 'types' object. You can also change the refresh rate by modifying the value passed to `setInterval()` function.