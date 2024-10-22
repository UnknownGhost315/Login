const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

// Paths to the HTML templates
const index1FilePath = path.join(__dirname, 'index1.html'); // Main create account page
const index2FilePath = path.join(__dirname, 'index2.html'); // Login page
const index3FilePath = path.join(__dirname, 'index3.html'); // Another create account page

// Read templates synchronously
const tempOverview = fs.readFileSync(index1FilePath, 'utf-8'); // Create account
const tempLogin = fs.readFileSync(index2FilePath, 'utf-8');    // Login page
const tempCreateAccount2 = fs.readFileSync(index3FilePath, 'utf-8'); // Another create account

// Create the server
const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);

    console.log('Request received for:', pathname);

    // Serve HTML pages
    if (pathname === '/index1' || pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(tempOverview);  // Serve the main create account page (index1)

    } else if (pathname === '/index2') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(tempLogin);  // Serve the login page (index2)

    } else if (pathname === '/index3') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(tempCreateAccount2);  // Serve another create account page (index3)

    // Serve JavaScript and CSS files
    } else if (pathname.endsWith('.js')) {
        const jsFilePath = path.join(__dirname, pathname);
        fs.readFile(jsFilePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>JavaScript file not found!</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            }
        });

    } else if (pathname.endsWith('.css')) {
        const cssFilePath = path.join(__dirname, pathname);
        fs.readFile(cssFilePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>CSS file not found!</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });

    } else if (pathname.endsWith('.jpg')) { // Serve image files
        const imagePath = path.join(__dirname, pathname);
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Image not found!</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
