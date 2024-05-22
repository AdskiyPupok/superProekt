// Файл middlewares/users.js

// Импортируем модель
const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
  // Используем метод populate для загрузки данных
  // из моделей categories и users по их id
  const result = await users.find({}).populate("categories").populate("users");
  console.log(result);
  next();
};

// Экспортируем функцию поиска всех пользователей
module.exports = findAllUsers;