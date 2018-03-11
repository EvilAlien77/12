var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './css/main.scss',
    output: {        
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
             test: /\.scss$/,
             use: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: 'css-loader!sass-loader'
             })
        }]
    },
    plugins: [
        new ExtractTextPlugin("css/style.css")
    ]
}