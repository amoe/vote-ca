// karma.conf.js

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        singleRun: true,
        browsers: ['PhantomJS'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'test.js'
        ],
        preprocessors: {
            'test.js': ['webpack']
        },
        webpack: webpackConfig,
        frameworks: ['mocha']
    });
};
