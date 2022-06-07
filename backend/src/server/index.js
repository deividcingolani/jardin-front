const app = require("./server");
const { PORT } = require("../config/globals");

const { getConnection } = require("../dao/db/db");

getConnection()
    .then((message) => {
        console.log(message);

        app.listen(PORT, () =>
            console.log(`Example app listening on port ${PORT}!`)
        );
    })
    .catch((err) => {
        reject(err);
    });
/* // Conexión con la base (host, usuario, clave, y nombre de la db)
// Esto habría que modificarlo al hostear en Heroku
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "jardin",
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Query para insertar consulta en base de datos
app.post("/api/insert", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const asunto = req.body.asunto;
    const consulta = req.body.consulta;

    const sql =
        "INSERT INTO consultas (nombre, apellido, correo, asunto, consulta) VALUES (?,?,?,?,?)";
    db.query(sql, [nombre, apellido, correo, asunto, consulta], (err, result) => {
        console.log(err);
    });
});

// Listen
app.listen(3001, () => {
    console.log("El server está corriendo en el puerto 3001");
}); */