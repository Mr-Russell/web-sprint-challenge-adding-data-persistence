const express = require("express");

const server = express();

server.use(express.json());

const projectsRouter = require("./routers/projects-router.js")
server.use("/api/projects", projectsRouter)

const tasksRouter = require("./routers/tasks-router.js")
server.use("/api/tasks", tasksRouter)

const resourcesRouter = require("./routers/resources-router")
server.use("/api/resources", resourcesRouter)

const port = process.env.PORT || 1234;

server.listen(port, ()=> console.log(`\n Server Running on Port ${port}`))