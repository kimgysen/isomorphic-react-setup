
import webpack from "webpack";


// Needs to be applied before the routes!
export const applyWebpackDevHotMiddleware = (app) => {
    const webpackConfig = require('../../../webpack.client.dev.config');
    const compiler = webpack(webpackConfig);

    // webpack hmr
    app.use(
        require('webpack-dev-middleware')(compiler, {
            hot: true,
            filename: 'bundle.js',
            noInfo: true,
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            },
            historyApiFallback: true
        })
    );

    app.use(require('webpack-hot-middleware')(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000
        })
    );

    if (module.hot) {
        module.hot.accept();
    }

};
