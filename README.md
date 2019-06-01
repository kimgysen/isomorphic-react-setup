# isomorphic-react-setup


Simple guide
------------ 
This repo provides boilerplate setup for easing the development workflow for developing isomorphic apps (SSR + client rendering). 

There are two branches in this repo: 

- webpack-dev-middleware: the standard way to hot reload components using this well-known middleware (also uses webpack-hot-middleware).  
- master: Experimental workflow setup using reload.js for auto-refreshing the browser in order to keep server and client aligned.  


For both branches simply: 

    npm install 

    npm run start:iso:dev  // hot reload all changes
    npm run start:iso:prod   // production build 

And it should just work.  
You can play around with it by just making some changes to the components in the 'common' folder and see how it refreshes in the browser. 

Using webpack-dev-middleware, we get mismatch exceptions between server and client on hot reload because the server needs to be restarted to take effect while the client rendering auto-updates the requested changes.  
A common solution using webpack hot reloading is to 'mask' these exceptions during the development phase, because we assume that server / client components will be the same anyway and so we can ignore the html that is returned from the server in dev.  

Using reload.js we don't have this problem though.  
On the downside, we need to write build files to disk.  
On the upside: 
- We don't have hydration problems because server and client rendered html are the same at all times (and thus neither do we need to mask them)  
- Changes to any of the server code are immediately Babel recompiled and refreshed in the browser.  

I'm not taking opinion on which of the methods is best given the tradeoff of each. 

Webpack 
------- 
Both server and client are compiled with Webpack.   
Bundles can be found in the following paths:  

server build -> dist/  
client build -> public/build/ 

Both develop and production Webpack build configuration files have been added.  
The production build splits up node modules in different chunks for dynamic caching and updates in the future.  
If you don't need it, you can just remove it.  

Structure 
--------- 
The structure below the src folder is simple:  

- client  
- common  
- server  

Where index.js is the entry point of the compilation process and the 'common' folder contains the components that are used to render both the server and the client. 


