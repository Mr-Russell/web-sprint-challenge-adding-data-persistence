const express = require("express");

const server = express();

server.use(express.json());



const port = process.env.PORT || 1234;

server.listen(port, ()=> console.log(`\n Server Running on Port ${port}`))