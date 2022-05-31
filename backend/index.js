// Crear app
const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'jardin',
});

app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({entended: true}));

app.post('/form', (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const asunto = req.body.asunto;
    const consulta = req.body.consulta;

    const sql = "INSERT INTO consultas (nombre, apellido, correo, asunto, consulta) VALUES (?,?,?,?,?)";
    db.query(sql, [nombre, apellido, correo, asunto, consulta], (err, result) => {
        console.log("It works!")
    })
})
app.listen(3001, () => {
    console.log('El server está corriendo en el puerto 3001');
});

