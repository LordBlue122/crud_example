Ejemplo de una aplicación tipo CRUD utilizando tecnologias MERN y otras librerias de Node.js

Rama de desarrollo de la aplicación, los cambios antes de ser subidos seran probados en conjunto en esta rama

------Variables de entorno (.env)------
MONGO_URI (Dirección y credenciales de la base de datos de mongodb)
OMDB_API_KEY (Key para la API de OMDB, necesaria para las imagenes utilizando una ID)
PORT (Puerto usado para la ejecución local del backend)

------Comados de para su uso en local------
(/) "npm run install:all" Instala todas las dependencias
(/server) "npm start" Inicia el backend, necesario haber agregado las variables de entorno
(/user) "npm start" Inicia el frontend

------Información adicional------
La aplicación no cuenta con diseño completamente responsive
Para las imagenes es necesario utilizar una ID de OMDb, si no existe se colocará un placeholder en su lugar
Se utiliza fontawesome para los iconos

------Diferencias con la rama de despliegue------
Las rutas relativas cambian a rutas fijas locales (htpp:/localhost:PORT/dir a /dir)
Se elimina la necesidad de indicar un puerto fijo
