var path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: '../firebase-admin/src/main/resources/static/built/bundle.js'
    },
    plugins: [
        new CopyPlugin({ 
            patterns: [ 
             { from: './public/favicon.ico' },
            ]
        })
    ],
    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }, {
                test: /\.css$/,
                use: ["css-loader"]
            }
        ]
    }
};