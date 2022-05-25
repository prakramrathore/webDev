const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync('WEB/tut22.html');

const hostname = '127.0.0.1'
const port = 80

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(filecontent)
})
server.listen(port,hostname, ()=>{
    console.log("Listening on port 80")
    console.log(`Server running at http://${hostname}:${port}/`)
})