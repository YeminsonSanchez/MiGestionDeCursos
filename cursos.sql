CREATE DATABASE cursos;

\c cursos;

CREATE TABLE curso (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR (50),
  nivel VARCHAR (50),
  fecha DATE,
  duracion VARCHAR (50)
);