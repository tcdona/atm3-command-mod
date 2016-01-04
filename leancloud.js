var thehttp = require('http')

var put = function(id, data, cb) {

  var options = {
    // hostname: '127.0.0.1',
    // port: 3000,
    hostname: 'feng.avosapps.com',
    port: 80,
    path: '/Atmmod/' + id,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  }

  var req = thehttp.request(options, function(res) {
    console.log('STATUS put: ' + res.statusCode)
    // console.log('HEADERS: ' + JSON.stringify(res.headers))
    var result = []
    res.setEncoding('utf8')
    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk)
      result.push(chunk)

    })
    res.on('end', function() {
      // console.log('No more data in response.')
      cb(result.join(''))
    })
  })

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message)
  })

  var sendData = JSON.stringify(data)
  req.write(sendData)

  req.end()
}

exports.put = put
