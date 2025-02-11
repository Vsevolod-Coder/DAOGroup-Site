const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3306;

// Настроим JSON-парсер
app.use(express.json());

// Подключение к базе данных
const connection = mysql.createConnection({
  host: "sql213.infinityfree.com", // Убедитесь, что это правильный хост
  user: "if0_38288833",
  password: "12347865a",
  database: "if0_38288833_dao",
  port: "3306",
});

// Проверка подключения
connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error("Ошибка при получении таблиц:", err);
  } else {
    console.log("Таблицы в базе данных:", results);
  }
});

// Роутинг
// Главная страница
app.get("/", (req, res) => {
  res.send("Добро пожаловать на сервер API!");
});

// Эндпоинт для получения всех сотрудников
app.get("/api/employees", (req, res) => {
  const sql = "SELECT * FROM employees";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Ошибка при получении сотрудников:", err);
      res.status(500).send("Ошибка при получении сотрудников");
      return;
    }
    res.status(200).json(results);
  });
});

// Эндпоинт для добавления нового сотрудника
app.post("/api/employees", (req, res) => {
  const { name, contacts, image } = req.body;
  const sql = "INSERT INTO employees (name, contacts, image) VALUES (?, ?, ?)";

  connection.query(sql, [name, contacts, image], (err, result) => {
    if (err) {
      console.error("Ошибка добавления сотрудника:", err);
      res.status(500).send("Ошибка добавления сотрудника");
      return;
    }
    res.status(201).json({ id: result.insertId, name, contacts, image });
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});