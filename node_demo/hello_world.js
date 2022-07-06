const http = require('http')

const hostName = "127.0.0.1"

const port = 8887

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World\n')
})

server.listen(port,hostName,() => {
    [3,2,1].forEach(num => {
        console.log(num)
    })
    console.log('Server running at http://',hostName,":",port)
})