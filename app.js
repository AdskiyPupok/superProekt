const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const apiRouter = require('./routes/api');
const app = express();
const pagesRouter = require("./routes/pages")
const PORT = 3000;

connectToDatabase();

const cookieParser = require("cookie-parser");


app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

// Остальной код


// Запуск приложения

app.listen(PORT);
