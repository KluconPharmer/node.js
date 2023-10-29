// const http = require('http');

// const server = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", 'text/plain');
//   res.end('<h1>Welcome to my Page!</h1>')

// });

// server.listen(3000,'127.0.0.1',() => {
//   console.log('Server running......')
// })

// const {v4:uuidv4} = require('uuid');
import {v4 as uuidv4} from 'uuid';

console.log(uuidv4())