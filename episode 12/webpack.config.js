var webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'buble-loader'
            }
        ]
    }
};
