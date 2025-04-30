import http from 'http';
import fs from 'fs/promises'; 
const PORT = process.env.PORT;

//Get current path

__filename
__dirname

const server = http.createServer(function(req, res) {
    try{
        // check if Get request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end('<h1>Home Page</h1>');
        } else if(req.url === '/about') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<h1>About</h1>');
        }
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('<h1>server error</h1>');
    }
    
  //res.setHeader('Content-Type', 'text/html')
  //res.statusCode = 500;
  
  //res.end(JSON.stringify({ message: 'sever error'})); 
  // Add parentheses here to properly end the response
  
});


server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
