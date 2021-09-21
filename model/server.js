const express = require("express");
var cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';  //url del end point

        // Middlewares
        this.middlewares();
        
        // Rutas de mi Aplcacion
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Lectura y parseo del Body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'))        
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto ", this.port);
        });
    }
}

module.exports = Server;