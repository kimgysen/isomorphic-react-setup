
import reload from "reload";


const cleanupReload = async (server, app, currentApp, currentReload) => {

    await currentReload.closeServer();

    server.removeListener('request', currentApp);
    server.on('request', app);

    return app;

};

export const reloadApp = async (app, server, currentApp, currentReload) => {

    await cleanupReload(server, app, currentApp, currentReload);

    const hotReloadReturned = await reload(app);
    hotReloadReturned.reload();

    return [hotReloadReturned, app];

};

