// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const TaskRouter = require('./task/router')
const ResourceRouter = require('./resource/router')
const ProjectRouter = require('./project/router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/tasks', TaskRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/projects', ProjectRouter)

server.get('/', (req, res) => {
    res.send(`Matts Website`)
})

server.use('*', (req, res) => {
    res.status(404).json({message: `${req.baseUrl} not found`})
})

module.exports = server