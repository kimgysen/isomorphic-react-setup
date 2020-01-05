
import http from 'http';
import fs from "fs";
import express from "express";
import favicon from 'serve-favicon';
import renderer from "./renderer";
import config from 'config';


const app = express();

app.use(favicon('./favicon.ico'));
app.use(express.static("public/build"));


app.get("*", (req, res, next) => {
    if (req.originalUrl === '/reload/reload.js') return next();

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
