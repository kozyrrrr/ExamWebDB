require('dotenv').config()
const express = require('express');
const { createConnection } = require('net');
const port = process.env.PORT;
const path = require('path');

const app = express()


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.post('/', (req, res) => {
    res.send('POST METHOD...')
    
  })

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
})