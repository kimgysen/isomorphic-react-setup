# isomorphic-react-setup

Simple guide
------------ 
This repo provides boilerplate setup for easing the development workflow for developing isomorphic apps (SSR + client rendering). 

There are two branches in this repo: 

- webpack-dev-middleware: the standard way to hot reload components using this well-known middleware (also uses webpack-hot-middleware).  
- master: Experimental workflow setup using reload.js for auto-refreshing the browser in order to keep server and client aligned.  

Using webpack-dev-middleware, we get mismatch exceptions between server and client on hot reload because the server needs to be restarted to take effect. 
A common solution using webpack hot reloading is to 'mask' these exceptions by assuming that server / client components will be the same anyway.  
If not, the app wouldn't be universal after all.  

Using reload.js we don't have this problem though.  
On the downside, we need to write build files to disk.  
On the upside: 
- We don't have hydration exceptions (and neiher do we need to mask them)  
- Changes to any of the server code are immediately recompiled and refreshed in the browser. 

I don't know which of the two methods is more productive / error proof, it's an experiment to find out... 

Webpack 
------- 
Both server and client are compiled with Webpack: 

server build -> dist/  
client build -> public/build/ 

Both develop and production build configs have been added. 
Production build splits up node modules in different chunks for dynamic caching and updates in the future. 
If you don't need it, you can just remove it. 

Structure 
--------- 
The structure is simply: 

- client  
- common  
- server  

Where common contains the common components to be rendered by both server and client. 

***********************
* Play around with it *
*********************** 

For both branches simply: 

Develop: npm run start:iso:dev  
Production: npm run start:iso:prod   

And it should just work (hopefully, it works on my machine :p). 
