
import path from 'path';
import fs from "fs";
import express from "express";
import favicon from 'serve-favicon';
import renderer from "./renderer";
import config from 'config';
import {envIsProduction, envIsDevelopment} from "./lib/envUtil";
import { applyWebpackDevHotMiddleware } from './develop/hotReload';


const app = express();

app.use(favicon('./public/favicon.ico'));

if (envIsProduction()) {
    app.use(express.static('./public/build'));
}

if (envIsDevelopment()) {
    applyWebpackDevHotMiddleware(app);

}

app.get("*", (req, res, next) => {
    let htmlPath = config.get('iso.htmlRoot');

    fs.readFile(htmlPath, "utf8", function(err, template) {
        const context = {};
        const html = renderer(template, req.path, context);
        res.set('content-type', 'text/html');
        res.send(html);
        res.end();
    });
});

export default app;
