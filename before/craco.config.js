//添加自定义webpack配置

const path = require('path')

module.exports = {
    // ...
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
            //'@': resolve('src')
        },
        // plugins: {
        //     add: [ /* ... */],
        //     remove: [ /* ... */],
        // },
        // configure: { /* ... */ },
        // configure: (webpackConfig, { env, paths }) => {
        //     /* ... */
        //     return webpackConfig;
        // },
    },
};