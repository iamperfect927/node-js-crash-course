console.log('express tutorial');
const { readFileSync } = require('fs');
const http = require('http');

// getting all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res)=>{
    console.log('user hit the server');
    const url = req.url;
    //home page
    if (url === '/' || url === '/home'){
       res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage); 
        res.end();
    }
    //about page
    else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>'); 
        res.end();        
    }
    // page styles
    else if (url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles); 
        res.end();        
    }
    // home images
    else if (url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage); 
        res.end();        
    }
    // home javascript
    else if (url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic); 
        res.end();        
    }
    // 404 page
    else{
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found</h1>'); 
        res.end();
    }
    
});
server.listen(5000);