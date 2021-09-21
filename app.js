require('dotenv').config({
  path: 'env/.env'
})
const Server = require('./model/server')

const server = new Server();
server.listen();