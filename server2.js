
import { createServer } from 'http';

const PORT = process.env.PORT || 4000;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jame Doe'},
    {id: 3, name: 'Jim Doe'}
];

const server =  createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => {user.id === parseInt(id)});
        if (user) {
            res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(users));
        res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found'}));
        res.end();
        }
         
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({id: 1, name: 'John Doe'}));
        res.end(); 
    }else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Route not found'}));
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});