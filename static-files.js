const fs = require('fs')
const path = require('path')

module.exports.serveStaticFile = (url, res) => {
  let pathFile = path.join(
    __dirname,
    'public',
    url === '/' ? 'index.html' : url
  )

  let contentType = getContentType(pathFile) || 'text/html'

  fs.readFile(pathFile, function (error, data) {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile(__dirname + '/public/404.html', 'utf8', (_, data) => {
          res.writeHead(404, {
            'Content-Type': 'text/html',
          })
          res.end(data)
        })
      } else {
        fs.readFile(__dirname + '/public/500.html', 'utf8', (_, data) => {
          res.writeHead(500, {
            'Content-Type': 'text/html',
          })
          res.end(data)
        })
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
      })
      res.end(data)
    }
  })
}

const getContentType = (pathFile) => {
  let extName = path.extname(pathFile)
  if (extName === '.js') return 'text/javascript'
  if (extName === '.css') return 'text/css'
}
