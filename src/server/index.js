
import app from './server';
import http from "http";
import reload from "reload";
import { envIsDevelopment } from "./lib/envUtil";
import config from 'config';
import { reloadApp } from './develop/reloadApp';


const server = http.createServer(app);

server.listen(config.get('server.port'));

if (envIsDevelopment()) {

    (async () => {
        await hotReloadApp();
    })();

}

async function hotReloadApp() {
    let currentApp = app;
    let currentReload = await reload(app);

    try {

        if (module.hot) {
            module.hot.accept('./server', async () => {

                [currentReload, currentApp] = await reloadApp(app, server, currentApp, currentReload);

            });
        }

    } catch (err) {

        console.error('Reload could not start, could not start server/sample app', err)
    }

}
