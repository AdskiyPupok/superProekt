// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  // Используем метод populate для загрузки данных
  // из моделей categories и users по их id
  const result = await games.find({}).populate("categories").populate("users");
  console.log(result);
  next();
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames;