// importaciones npm
const express = require("express");

// variables globales
const app = express();
const { getAll, newCurse, editCurse, deleteCurse } = require("./consult");
const { showError } = require("./error");

// configuracion del puerto
const PORT = 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// RUTAS:
// GET:
app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    showError(res, error);
  }
});

app.get("/cursos", async (req, res) => {
  try {
    const curse = await getAll();
    res.statusCode = 200;
    res.send(curse);
  } catch (error) {
    showError(res, error);
  }
});

// POST:
app.post("/curso", async (req, res) => {
  try {
    const result = await newCurse(req.body);
    res.statusCode = 200;
    res.send(result);
  } catch (error) {
    showError(res, error);
  }
});

// PUT:
app.put("/curso", async (req, res) => {
  try {
    const { id, nombre, nivel, fecha, duracion } = req.body;
    const result = await editCurse(id, nombre, nivel, fecha, duracion);
    res.statusCode = 200;
    res.send(result);
  } catch (error) {
    showError(res, error);
  }
});

// DELETE:
app.delete("/cursos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteCurse(id);
    res.statusCode = 200;
    res.send(result);
  } catch (error) {
    showError(res, error);
  }
});

// PUERTO:
app.listen(PORT, () =>
  console.log(`SERVIDOR CORRIENDO EN http://localhost:${PORT}`)
);
