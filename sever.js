import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 3000;  

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);

const server = http.createServer(async function(req, res) {
    try {
        // Check if GET request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public/index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public/about.html');
            } else {
                // If route not found, send 404
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }

            // Try to read and serve the file
            const data = await fs.readFile(filePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        } else {
            // Method not allowed
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('405 Method Not Allowed');
        }

    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Server Error</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
