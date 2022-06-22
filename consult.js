const { Pool } = require("pg");
require("dotenv").config();

// se usa para conectar a la base de datos con dotenv
const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(config);

// se usa para obtener todos los cursos con ruta get /cursos
const getAll = async () => {
  try {
    const result = await pool.query(
      "SELECT id, nombre, nivel, fecha, duracion FROM curso"
    );
    return result.rows;
  } catch (error) {
    console.log("Error al obtener los cursos", error.menssage, error.code);
  }
};

// se usa para registrar un nuevo curso con ruta post /curso y se recibe la data desde el formulario

const newCurse = async (data) => {
  try {
    const result = await pool.query(
      "INSERT INTO curso (nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4) RETURNING id",
      [data.nombre, data.nivel, data.fecha, data.duracion]
    );
    return result.rows;
  } catch (error) {
    console.log("Error al crear el curso", error.menssage, error.code);
  }
};

// se usa para editar un curso con ruta put /curso y se reciben los parametros desde el formulario

const editCurse = async (id, nombre, nivel, fecha, duracion) => {
  try {
    const result = await pool.query(
      "UPDATE curso SET nombre = $1, nivel = $2, fecha = $3, duracion = $4 WHERE id = $5 RETURNING *",
      [nombre, nivel, fecha, duracion, id]
    );
    return result.rows[0];
  } catch (error) {
    console.log("Error al editar el curso", error.menssage, error.code);
  }
};

// se usa para eliminar un curso con ruta delete /cursos/:id
const deleteCurse = async (id) => {
  try {
    const result = await pool.query("DELETE FROM curso WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    console.log("Error al eliminar el curso", error.menssage, error.code);
  }
};
module.exports = { getAll, newCurse, editCurse, deleteCurse };
