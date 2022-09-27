//  require('dotenv').config()
//  const express = require('express');
//  const port = process.env.PORT;
//  const path = require('path');
// import router from "./routers/router.js"

import express from 'express'
import path from 'path'
import router from "./routers/router.js"
import 'dotenv/config'
const PORT = process.env.PORT  || 5500

const app = express()
const __dirname = path.resolve(path.dirname(''));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json( { extended: true }));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use(router);

// app.post('/', (req, res) => {
//     res.send('POST METHOD...')
    
//   })

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})