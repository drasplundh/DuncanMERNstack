let path = require("path"),
HtmlWebpackPlugin = require('html-webpack-plugin'), 

config = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 9090, 
        historyApiFallback : true 
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //localhost:9090 - loads this html
}

module.exports = config;