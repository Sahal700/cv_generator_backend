const express = require("express")
require('dotenv').config()
const cors = require('cors')
const routes = require("./routes")
require('./connection')

const server = express()
server.use(cors())
server.use(express.json())
server.use(routes)

const PORT = 4000 || process.env

server.listen(PORT,()=>{
  console.log("server is running");
})
