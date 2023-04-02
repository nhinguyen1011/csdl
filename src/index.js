const express = require('express')
const morgan = require('morgan')
const path = require('path')

const handlebars = require('express-handlebars');

const app = express()
const port = 5500

app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.use('/css', express.static(path.join(__dirname, 'public/css')));

// console.log(path.join(__dirname,'public/css'))
app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine({
  extname : '.handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));
// console.log("path: ",path.join(__dirname,'views'))

app.get('/taixe', (req, res) => {
  res.render('home')
})

app.get('/khachhang', (req, res) => {
  res.render('news')
})
app.get('/thongtincuahang', (req, res) => {
  res.render('store')
})
app.get('/datmon', (req, res) => {
  res.render('order')
})
app.get('/thanhtoan', (req, res) => {
  res.render('pay')
})
app.get('/xacnhan', (req, res) => {
  res.render('confirm')
})
app.get('/thaydoi', (req, res) => {
  res.render('change')
})
app.get('/theodoi', (req, res) => {
  res.render('follow')
})
app.get('/danhgia', (req, res) => {
  res.render('rate')
})
app.get('/admin', (req, res) => {
  res.render('admin')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})