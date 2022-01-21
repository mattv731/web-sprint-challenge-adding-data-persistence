// build your server here and require it from index.js
const express = require('express')
const TaskRouter = require('./task/router')
// const ResourceRouter = require('./resource/router')
// const ProjectRouter = require('./project/router')

const server = express()

server.use('/api/task', TaskRouter)
// server.use('/api/resource', ResourceRouter)
// server.use('/api/project', ProjectRouter)

server.get('/', (req, res) => {
    res.sendStatus(`Matts Website`)
})

server.use('*', (req, res) => {
    res.status(404).json({message: `${req.baseUrl} not found`})
})

module.exports = server