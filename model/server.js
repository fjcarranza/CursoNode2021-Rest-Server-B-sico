const express = require("express");
var cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';  //url del end point

        //Conectar a la Base de Datos

        this.ConectarDB();


        // Middlewares
        this.middlewares();
        
        // Rutas de mi Aplcacion
        this.routes();
    }


    async ConectarDB(){
        await dbConnection();

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