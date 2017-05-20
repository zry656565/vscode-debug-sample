/**
 * Taken from https://blog.risingstack.com/your-first-node-js-http-server/
 */

const http = require('http')  
const port = 8092

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
