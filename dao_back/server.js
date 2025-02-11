const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const connection = mysql.createConnection({
  host: "MySQL-5.7",
  user: "root",
  password: "1234",
  database: "dao",
});

connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error("Ошибка при получении таблиц:", err);
  } else {
    console.log("Таблицы в базе данных:", results);
  }
});

app.get("/", (req, res) => {
  res.send("Добро пожаловать на сервер API!");
});

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

app.post("/api/employees", upload.single("image"), (req, res) => {
  const { name, contacts, position, image } = req.body;
  const imageFile = req.file ? req.file.filename : image;

  if (!name || !contacts || !position || !imageFile) {
    return res
      .status(400)
      .send(
        "Все поля (name, contacts, position, image) обязательны для заполнения."
      );
  }

  const sql =
    "INSERT INTO employees (name, contacts, position, image) VALUES (?, ?, ?, ?)";

  connection.query(
    sql,
    [name, contacts, position, imageFile],
    (err, result) => {
      if (err) {
        console.error("Ошибка добавления сотрудника:", err);
        res.status(500).send("Ошибка при добавлении сотрудника");
        return;
      }
      res.status(201).json({
        id: result.insertId,
        name,
        contacts,
        position,
        image: imageFile,
      });
    }
  );
});

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});