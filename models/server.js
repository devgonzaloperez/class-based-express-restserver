const express = require('express'); //Importar Express.
const cors = require('cors'); //Importar Cors.
const router = require('../routes/user.routes');

class Server{

    constructor(){
        this.app = express(); //Crear servidor.
        this.port = process.env.PORT;
        this.usersPath = "/api/users"; //String por si alguien quiere ver rápidamente cuál es el path de la api.

        //Middlewares.
        this.middlewares();

        //Rutas.
        this.routes();
    }

    middlewares(){
        //1. Cors.
        this.app.use(cors());

        //2. Lectura JSON.
        this.app.use(express.json()); //Sirve para que Express comprenda lo recibido en formato JSON.

        //3. Establecer directorio público.
        this.app.use(express.static('./public'));
    }

    routes(){ //Establezco el router.
        this.app.use('/api/users', router);
    }

    listen(){
        this.app.listen(this.port, ()=>{ //Iniciar servidor.
            console.log(`Server started on http://localhost:${this.port}`)
        });
    }

}

module.exports = Server;