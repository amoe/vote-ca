// webpack configuration file

module.exports = {
    entry: ['babel-polyfill', "./entry.js"],
    output: {
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
