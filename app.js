
import express from 'express'
import path from 'path'
import 'dotenv/config'
import bodyParser from "body-parser";

import controller from './controllers/controller.js'
const PORT = process.env.PORT  || 5500

const app = express()

const __dirname = path.resolve(path.dirname(''));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.get('/add', controller.sendNote) 

app.post('/add', controller.createNote);


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})