const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

// Настроим JSON-парсер для обработки raw (JSON) данных
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Настроим multer для обработки form-data
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Папка для хранения загруженных файлов
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Уникальное имя файла
  },
});
const upload = multer({ storage: storage });

// Подключение к базе данных
const connection = mysql.createConnection({
  host: "mysql-daogroup.alwaysdata.net",
  user: "daogroup",
  password: "12347865a",
  database: "daogroup_db",
});

// Проверка подключения
connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error("Ошибка при получении таблиц:", err);
  } else {
    console.log("Таблицы в базе данных:", results);
  }
});

// Получение всех сервисов
app.get("/api/services", (req, res) => {
  const sql = "SELECT * FROM services";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Ошибка при получении сервисов:", err);
      res.status(500).send("Ошибка при получении сервисов");
      return;
    }
    res.status(200).json(results);
  });
});

// Добавление нового сервиса (через form-data или raw)
app.post(
  "/api/services",
  upload.single("backimg"), // Теперь только один файл backimg
  (req, res) => {
    const { title, description } = req.body;

    // Проверяем, пришел ли запрос через form-data или raw JSON
    const backimg = req.file ? req.file.filename : req.body.backimg; // Используем только backimg

    if (!title || !description || !backimg) {
      return res
        .status(400)
        .send("Все поля (title, description, backimg) обязательны.");
    }

    const sql =
      "INSERT INTO services (title, description, backimg) VALUES (?, ?, ?)";

    connection.query(sql, [title, description, backimg], (err, result) => {
      if (err) {
        console.error("Ошибка добавления сервиса:", err);
        res.status(500).send("Ошибка при добавлении сервиса");
        return;
      }
      res.status(201).json({
        id: result.insertId,
        title,
        description,
        backimg,
      });
    });
  }
);

// Пример маршрута на сервере Express для получения сервиса по slug
app.get("/api/services/:slug", (req, res) => {
  const { slug } = req.params; // Получаем slug из URL
  const sql = "SELECT * FROM services WHERE slug = ?"; // Меняем на поиск по slug
  connection.query(sql, [slug], (err, results) => {
    if (err) {
      console.error("Ошибка при получении сервиса:", err);
      res.status(500).send("Ошибка при получении сервиса");
      return;
    }
    if (results.length === 0) {
      return res.status(404).send("Сервис не найден");
    }
    res.status(200).json(results[0]); // Отправляем первый сервис
  });
});

// Раздача статичных файлов из папки 'uploads'
app.use("/uploads", express.static("uploads"));

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});
