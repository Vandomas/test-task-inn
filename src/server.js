require('dotenv').config('./.env');

const path = require('path');

const express = require('express')
const app = express();


app.use(express.static(path.join(__dirname, 'frontend', 'assets')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
});


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Приложение работает на порту: ${process.env.SERVER_PORT}`)
});
