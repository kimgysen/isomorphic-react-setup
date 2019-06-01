
import app from './server';
import http from "http";
import config from 'config';
import {envIsDevelopment} from "./lib/envUtil";
import webpack from "webpack";


const server = http.createServer(app);

server.listen(config.get('server.port'));
