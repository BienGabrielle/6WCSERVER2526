
const http = require('http');
const home = require('./modules/home');
const about = require('./modules/about');
const contact = require('./modules/contact');

const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  if (req.url === '/') {
    res.write('<h1>Welcome to my Node.js Application</h1>');
    res.write(home('John Smith'));
  } else if (req.url === '/about') {
    res.write('<h1>This is the About Page</h1>');
    res.write(about('John Smith'));
  } else if (req.url === '/contact') {
    res.write('<h1>This is the Contact Page</h1>');
    res.write(contact('John Smith'));
  } else if (req.url === '/gallery') {
    res.write('<h1>This is the Gallery Page</h1>');
  } else {
    res.write('<h1>Invalid Request</h1>');
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Pangilinan, Bien Gabrielle M. | July 18, 2025 | WD-301 //