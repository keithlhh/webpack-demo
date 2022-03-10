const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: '[fullhash].hello.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['y-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            handleDone: () => {
                console.log('我清理完了')
            }
        }),
    ]
}