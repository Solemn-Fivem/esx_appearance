const path = require('path');

module.exports = {
    mode: 'development', // Usa 'production' per una build ottimizzata
    entry: {
        client: './src/client.js', // File client
        server: './src/server.js', // File server
    },
    output: {
        filename: '[name].js', // Genera client.js e server.js
        path: path.resolve(__dirname, 'dist'),
    },
};