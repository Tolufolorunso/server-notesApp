const http = require('http')
const { serveStaticFile } = require('./static-files.js')

const PORT = 1000

const server = http.createServer((req, res) => {
  let url = req.url
  serveStaticFile(url, res)
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
