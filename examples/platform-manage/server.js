var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var express = require('express')

var app = new express()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('./'))

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/fetchDoctorList/:start/:length', function (req, res) {
  var start = req.params.start;
  var length = req.params.length;


  var result = [];
  for (var i = 0; i < length; i++) {
    result.push({
      id: start + '--' + length,
      phone: start * length + i,
      doctor_Name: start + '-' + i,
      hospital_Id: 'abc',
      department_Id: 'ddd',
      title_Id: 'sdf',
      doctor_Photo: '',
      doctor_Practicing_Photo: '',
      doctor_Practicing_Number: '3308022239248238',
      doctor_Major: 'english',
      doctor_Is_Checked: '0',
      doctor_Info_Remark: 'remark',
      doctor_Info_Creat_Time: '2016-10-10'
    })
  }
  res.json({
    doctorList: result,
    total: 56,
    status: 0
  })
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
