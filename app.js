const http = require('http')
const { serveStaticFile } = require('./static-files.js')

const PORT = 1000

const server = http.createServer((req, res) => {
  let url = req.url
  if (url === '/') {
    serveStaticFile(res, '/public/pages/index.html', 'text/html', 200)
  } else if (url === '/index2.html') {
    serveStaticFile(res, '/public/pages/index2.html', 'text/html', 200)
  } else if (url === '/index.css') {
    serveStaticFile(res, '/public/style/index.css', 'text/css', 200)
  } else if (url === '/index.js') {
    serveStaticFile(res, '/public/script/index.js', 'text/js', 200)
  } else {
    serveStaticFile(res, '/public/pages/404.html', 'text/html', 404)
  }
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
