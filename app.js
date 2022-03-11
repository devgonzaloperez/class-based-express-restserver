require('dotenv').config(); //Impotar Dotenv.
const Server = require('./models/server'); //Importar clase Server.

const server = new Server(); //Crear objeto server con la clase Server.
server.listen();