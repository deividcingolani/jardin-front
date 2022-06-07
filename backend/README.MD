## CORRAMOS EN EL SERVIDOR LOCAL

Para correr el servidor en local, simplemente se deben dar los siguientes pasos:

git clone https://github.com/fx-biocoder/jardin-front.git

cd backend

npm install

Agregrar variables de entorno para configurar la base de datos localmente

Modo producción: npm start

Modo Desarrollo: npm run devStart

# Breve explicacion de las carpetas y archivos.

**DAO:** Dentro tiene la carpeta "db" y dentro el archivo "db.js". Alli es donde se realiza la conexion a la base de datos.

**Services:** Tiene como finalidad alojar la parte logica del negocio. **Logica de negocio** ==> Todo lo que involucre consultas a la BBDD, peticiones, validaciones post controlador, etc-

**Controllers:** Recibe las peticiones del cliente, las envia a los servicios y el servicio devuelve la respuesta en forma de json.

**Routes:** Almacena los endpoints que seran usados por el front para comunicarse con el back

**Server:** **Server.js** ===> Configuracion del servidor. **Index.js** ===> Levantamiento del servidor.

**NOTA:** Se realizó una consulta get, para corroborar que funcione la conexión a la BBDD, cuando se hostee, se realizarán las consultas que sean necesarias.
