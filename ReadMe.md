# Desafío - Mi gestión de cursos

La academia necesita gestionar sus cursos de programación y solicitó la ayuda de uno de
sus estudiantes full stack developer para crear una aplicación que permita hacer un CRUD
de los cursos usando una API REST propia.

En este desafío deberás crear una API REST con Express y el paquete pg para servir el
backend de una aplicación tipo CRUD en el lado del cliente.

## Autor ✒️

**Equipo #2**


### Requerimientos

1. Crear una ruta POST /curso que reciba un payload desde el cliente con los datos de
un nuevo curso y los ingrese a la tabla cursos.

2. Crear una ruta GET /cursos que consulte y devuelva los registros almacenados en la
tabla cursos.

3. Crear una ruta PUT /curso que reciba un payload desde el cliente con los datos de un
curso ya existente y actualice su registro en la tabla cursos.

4. Crear una ruta DELETE /cursos que reciba el id de un curso como parámetro de la
ruta y elimine el registro relacionado en la tabla cursos.

## Informacion de utilidad:

- Se usa como base de datos postgreSQL, en el archivo (cursos.sql) encontrara la creacion de la    tabla y la respectiva base de datos.

- En el archivo (consult.sql), se encuentran las query a la base de datos.

- Se debe crear un archivo .(env) con la mismas intruccions del archivo (.envexample).

- Para levantar el servidor y ver su funcionalidad, en la consola de comando posicionado en la carpeta raiz usar los siguiente comando en orden: (npm install, node server.js)



## Construido con 🛠️

- [nodeJS](https://nodejs.org/en/)

#### Usando las librerías:

- [Express](https://expressjs.com/es/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pg](https://www.npmjs.com/package/pg)
