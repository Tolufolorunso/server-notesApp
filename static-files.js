const fs = require('fs')

module.exports.serveStaticFile = (res, path, contentType, responseCode) => {
  // console.log(__dirname)
  if (!responseCode) responseCode = 200
  fs.readFile(__dirname + path, function (error, data) {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(400, {
          'Content-Type': 'text/html',
        })
        res.end(`<h2>Something went wrong</h2>
					<a href='/'>Go to homepage</a>
				`)
      }
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      })
      res.end('')
    } else {
      res.writeHead(responseCode, {
        'Content-Type': contentType,
      })
      res.end(data)
    }
  })
}
