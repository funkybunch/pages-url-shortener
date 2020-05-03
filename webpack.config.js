const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
};