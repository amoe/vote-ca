// karma.conf.js

module.exports = function (config) {
    config.set({
        singleRun: true,
        browsers: ['PhantomJS'],
        files: ['test.js'],
        preprocessors: {
            'test.js': ['webpack']
        },
        frameworks: ['mocha']
    });
};
