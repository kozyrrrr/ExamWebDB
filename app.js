
import express, { response } from 'express'
import path from 'path'
import 'dotenv/config'
import bodyParser from "body-parser";
import router from './routers/router.js';
import controller from './controllers/controller.js'
import morgan from 'morgan';
const PORT = process.env.PORT  || 5500

const app = express()

const __dirname = path.resolve(path.dirname(''));

app.use(morgan(process.env.LOG_LEVEL)) // пакет для логирования запросов
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

router.get('/*', (req, res) => {
    res.render('index.html', 'style.css');
});


app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.get('/add', controller.sendNote) 

app.post('/add', controller.createNote)

app.delete('/add/:id', controller.deleteNote) 


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})