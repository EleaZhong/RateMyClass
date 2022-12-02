var path = require('path')

module.exports = {
    entry: './src/index.js',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: '../firebase-admin/src/main/resources/static/built/bundle.js'
    },
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