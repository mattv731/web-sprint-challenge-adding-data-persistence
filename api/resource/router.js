// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
    const resource = req.body

    Resources.insert(resource)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
})

router.get('/', (req, res, next) => {
    Resources.find()
    .then(resource => {
        res.json(resource)
    })
    .catch(next)
})

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message + 'router.use error'
    })
})

module.exports = router